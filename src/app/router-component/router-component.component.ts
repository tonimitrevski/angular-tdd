import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Hero} from '../input-and-output/hero';
import {UsersService} from '../dependency/user.service';

@Component({
    selector:    'app-router-component',
    templateUrl: './router-component.component.html'
})
export class RouterComponentComponent implements OnInit{
    @Input() hero: Hero;
    @Output() selected = new EventEmitter<Hero>();

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: UsersService) {
    }

    ngOnInit(): void {
        // get hero when `id` param changes
        this.route.paramMap.subscribe(p => this.getHero(p.has('id') && p.get('id')));
    }

    getHero(id) {

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
