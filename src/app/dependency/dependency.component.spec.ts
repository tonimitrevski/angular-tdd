import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import { DependencyComponent } from './dependency.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {UsersService} from './user.service';

describe('DependencyComponent', () => {
  let comp:    DependencyComponent;
  let fixture: ComponentFixture<DependencyComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let rootEl:      HTMLElement;
  let userService;
  let spy;
  const testQuote = 'Toni';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DependencyComponent ],
      providers:    [ UsersService ]
    });

    fixture = TestBed.createComponent(DependencyComponent);
    comp    = fixture.componentInstance;
    rootEl = fixture.debugElement.nativeElement; // BannerComponent test instance

    // UserService from the root injector
    userService = TestBed.get(UsersService);

    // Setup spy on the `getQuote` method
    spy = spyOn(userService, 'getQuote')
        .and.returnValue(Promise.resolve(testQuote));

    //  get the "welcome" element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('.welcome'));
    el = de.nativeElement;
  });

  it('should not show quote before OnInit', () => {
    expect(el.textContent).toBe('', 'nothing displayed');
    expect(spy.calls.any()).toBe(false, 'getQuote not yet called');
  });

  it('should still not show quote after component initialized', () => {
    fixture.detectChanges();
    // getQuote service is async => still has not returned with quote
    expect(el.textContent).toBe('', 'no quote yet');
    expect(spy.calls.any()).toBe(true, 'getQuote called');
  });

  it('should show quote after getQuote promise (async)', async(() => {
    fixture.detectChanges();

    fixture.whenStable().then(() => { // wait for async getQuote
      fixture.detectChanges();        // update view with quote
      expect(el.textContent).toBe(testQuote);
    });
  }));

  it('should show quote after getQuote promise (fakeAsync)', fakeAsync(() => {
    fixture.detectChanges();
    tick();                  // wait for async getQuote
    fixture.detectChanges(); // update view with quote
    expect(el.textContent).toBe(testQuote);
  }));

  it('should show quote after getQuote promise (done)', (done: any) => {
    fixture.detectChanges();
    // get the spy promise and wait for it to resolve
    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges(); // update view with quote
      expect(el.textContent).toBe(testQuote);
      done();
    });
  });

  it('test real http request (done)', (done: any) => {
    // get the spy promise and wait for it to resolve
    comp.userService.getQuote().then(
        (a) => {
          expect(testQuote).toBe(a);
          done();
        }
    );
  });
});
