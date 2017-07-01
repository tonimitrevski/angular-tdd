import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DependencyComponent } from './dependency.component';
import {By} from '@angular/platform-browser';
import {UsersService} from './user.service';
import {DebugElement} from '@angular/core';

describe('DependencyComponent', () => {
  let comp:    DependencyComponent;
  let fixture: ComponentFixture<DependencyComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let rootEl:      HTMLElement;
  let userServiceStub;
  let userService;

  beforeEach(() => {
    // stub UserService for test purposes
    userServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User'}
    };

    TestBed.configureTestingModule({
      declarations: [ DependencyComponent ],
      providers:    [ {provide: UsersService, useValue: userServiceStub } ]
    });

    fixture = TestBed.createComponent(DependencyComponent);
    comp    = fixture.componentInstance;
    rootEl = fixture.debugElement.nativeElement; // BannerComponent test instance

    // UserService from the root injector
    userService = TestBed.get(UsersService);

    //  get the "welcome" element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('.welcome'));
    el = de.nativeElement;
  });

  it('stub object and injected UserService should not be the same', () => {
    expect(userServiceStub === userService).toBe(false);
    // Changing the stub object has no effect on the injected service
    userServiceStub.isLoggedIn = false;
    expect(userService.isLoggedIn).toBe(true);
  });

  it('should welcome the user', () => {
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain('Welcome', '"Welcome ..."');
    expect(content).toContain('Test User', 'expected name');
  });

  it('should welcome "Bubba"', () => {
    userService.user.name = 'Bubba'; // welcome message hasn't been shown yet
    fixture.detectChanges();
    expect(el.textContent).toContain('Bubba');
  });

  it('should request login if not logged in', () => {
    userService.isLoggedIn = false; // welcome message hasn't been shown yet
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).not.toContain('Welcome', 'not welcomed');
    expect(content).toMatch(/log in/i, '"log in"');
  });
});
