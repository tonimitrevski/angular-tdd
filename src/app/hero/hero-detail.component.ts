/* tslint:disable:member-ordering */
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router }   from '@angular/router';
import 'rxjs/add/operator/map';

import { Hero }              from '../model';
import { HeroDetailService } from './hero-detail.service';

@Component({
  selector:    'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  providers:  [ HeroDetailService ]
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private heroDetailService: HeroDetailService,
    private route:  ActivatedRoute,
    private router: Router) {
  }

  @Input() hero: Hero;

  ngOnInit(): void {
    // get hero when `id` param changes
    this.route.paramMap.subscribe(p => this.getHero(p.has('id') && p.get('id')));
  }

  private getHero(id: string): void {
    // when no id or id===0, create new hero
    if (!id) {
      this.hero = new Hero();
      return;
    }

    this.heroDetailService.getHero(id).then(hero => {
      if (hero) {
        this.hero = hero;
      } else {
        this.gotoList(); // id not found; navigate to list
      }
    });
  }

  save(): void {
    this.heroDetailService.saveHero(this.hero).then(() => this.gotoList());
  }

  cancel() { this.gotoList(); }

  gotoList() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
