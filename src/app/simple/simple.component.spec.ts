import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {SimpleComponent} from './simple.component';

describe('SimpleComponent', () => {

  let comp:    SimpleComponent;
  let fixture: ComponentFixture<SimpleComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let rootEl:  HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleComponent ], // declare the test component
    })
        .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleComponent);

    comp = fixture.componentInstance; // BannerComponent test instance
    rootEl = fixture.debugElement.nativeElement; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('no title in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

  it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });

});
