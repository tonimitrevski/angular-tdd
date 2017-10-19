import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyClassBindingComponent } from './property-class-binding.component';
import {By} from "@angular/platform-browser";

describe('PropertyClassBindingComponent', () => {
  let component: PropertyClassBindingComponent;
  let fixture: ComponentFixture<PropertyClassBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyClassBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyClassBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render total votes', () => {
      component.othersVote = 20;
      component.myVote = 1;
      fixture.detectChanges();
      // this is wrapper around native element in JS
      const debugElement = fixture.debugElement.query(By.css('.vote-count'));
      // take native element
      const nativeElement: HTMLElement = debugElement.nativeElement;

      expect<any>(nativeElement.innerText).toContain(21);
  });

  it('should add higliht class if upvoted', () => {
      component.myVote = 1;
      fixture.detectChanges();

      const debugElement = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
      expect(debugElement.classes['highlighted']).toBeTruthy();
  });

  it('should increase total votes if clicked', () => {
      const button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
      button.triggerEventHandler('click', null);
      expect(component.totalVotes).toBe(1);
  });
});
