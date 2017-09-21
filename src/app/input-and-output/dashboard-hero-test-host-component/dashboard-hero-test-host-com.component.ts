import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Hero} from '../hero';

@Component({
    selector:    'app-dashboard-hero-test-host-component',
    templateUrl: './dashboard-hero-test-host-com.component.html'
})
export class DashboardHeroTestHostComponent {
    @Input() hero: Hero;
    @Output() selected = new EventEmitter<Hero>();
    click() { this.selected.emit(this.hero); }
}