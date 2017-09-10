import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {DependencyAsyncComponent} from './dependency-async.component';

describe('BannerComponent (templateUrl)', () => {

  let comp:    DependencyAsyncComponent;
  let fixture: ComponentFixture<DependencyAsyncComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  const testQuote = 'Test quote';
  let spy;
  let twainService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ DependencyAsyncComponent ],
      providers:    [ twainService ],
    });

    fixture = TestBed.createComponent(DependencyAsyncComponent);
    comp    = fixture.componentInstance;

    // TwainService actually injected into the component
    twainService = fixture.debugElement.injector.get(twainService);

    // Setup spy on the `getQuote` method
    spy = spyOn(twainService, 'getQuote')
      .and.returnValue(Promise.resolve(testQuote));

    // Get the Twain quote element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('.twain'));
    el = de.nativeElement;
  });

});