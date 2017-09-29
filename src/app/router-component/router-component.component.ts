import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Hero} from '../model/hero';
import {UsersService} from '../dependency/user.service';

@Component({
    selector:    'app-router-component',
    templateUrl: './router-component.component.html'
})
export class RouterComponentComponent {
    @Input() hero: Hero;
    @Output() selected = new EventEmitter<Hero>();

    constructor(
        private router: Router,
        private userService: UsersService) {
    }

    /**
     * On click emmit selected value
     */
    click() { this.selected.emit(this.hero); }

    /**
     * Go to details page for hero
     * @param {number} id
     */
    gotoDetail(id: number) {
        const url = `/heroes/${id}`;
        this.router.navigateByUrl(url);
    }
}
