import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DashboardHeroComponent} from './dashboard-hero.component';
import {By} from "@angular/platform-browser";
import {Hero} from "../hero";
import {click} from "../../helpers/clickHelper";

describe('Dashboard Hero', () => {
  let component: DashboardHeroComponent;
  let fixture: ComponentFixture<DashboardHeroComponent>;
  let heroEl;
  let expectedHero;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHeroComponent ]
    })
    .compileComponents(); // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHeroComponent);
    component = fixture.componentInstance;
    heroEl  = fixture.debugElement.query(By.css('.hero')); // find hero element

    // pretend that it was wired to something that supplied a hero
    expectedHero = new Hero(42, 'Radmila');
    component.hero = expectedHero;
    fixture.detectChanges(); // trigger initial data binding
  });

  it('Dashborad hero should be created', () => {
    expect(component).toBeTruthy();
  });

  // Test for input.
  it('should display hero name', () => {
      const expectedPipedName = expectedHero.name.toUpperCase();
      expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);
  });

  // Test for click event.
  it('should raise selected event when clicked', () => {
      let selectedHero: Hero;
      component.selected.subscribe((hero: Hero) => selectedHero = hero);

      click(heroEl);   // triggerEventHandler helper
      expect(selectedHero).toBe(expectedHero);
  });
});
