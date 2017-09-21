import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {Hero} from '../hero';
import {click} from '../../helpers/clickHelper';
import {DashboardHeroTestHostComponent} from './dashboard-hero-test-host-com.component';
import {Component} from '@angular/core';

/**
 * Create test host component
 */
@Component({
    template: `
    <app-dashboard-hero-test-host-component  [hero]="hero"  (selected)="onSelected($event)"></app-dashboard-hero-test-host-component>`
})
class TestHostComponent {
    hero = new Hero(42, 'Test Name');
    selectedHero: Hero;
    onSelected(hero: Hero) { this.selectedHero = hero; }
}

/**
 * Test configuration
 */
describe('Dashboard Hero Test Host Component', () => {
    let testHost: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;
    let heroEl;
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ DashboardHeroTestHostComponent, TestHostComponent]
      })
      .compileComponents(); // compile template and css
    }));

    beforeEach(() => {
      fixture  = TestBed.createComponent(TestHostComponent);
      testHost = fixture.componentInstance;
      heroEl   = fixture.debugElement.query(By.css('.hero')); // find hero
      fixture.detectChanges(); // trigger initial data binding
    });

    it('Dashborad hero test should be created', () => {
      expect(testHost).toBeTruthy();
    });

    it('should display hero name', () => {
        const expectedPipedName = testHost.hero.name.toUpperCase();
        expect(heroEl.nativeElement.textContent).toContain(expectedPipedName);
    });

    it('should raise selected event when clicked', () => {
        click(heroEl);
        // selected hero should be the same data bound hero
        expect(testHost.selectedHero).toBe(testHost.hero);
    });
});
