/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { UserDetailsComponent } from './user-details.component';
import {Observable} from "rxjs";
import {Subject} from "rxjs/Subject";

describe('Integration test - Route Component UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  class RouterStab {
    navigate(params) {

    }
  }

  class ActivatedRouterStab {
    private subject = new Subject();

    push(value) {
      this.subject.next(value);
    }

    get params() {
      return this.subject.asObservable();
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
          {provide: Router, useClass: RouterStab},
          {provide: ActivatedRoute, useClass: ActivatedRouterStab}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect user to users page after saving', () => {
      // Here we take our new created fake routerStab, calling Router will call Router Stab because that is provided in provide
      const router = TestBed.get(Router);
      const spy = spyOn(router, 'navigate');

      component.save();
      expect(spy).toHaveBeenCalledWith(['users']);
  });

    it('should redirect user to page not found if not valid user id is passed', () => {
        // Here we take our new created fake routerStab, calling Router will call Router Stab because that is provided in provide
        const router = TestBed.get(Router);
        const spy = spyOn(router, 'navigate');

        const route: ActivatedRouterStab = TestBed.get(ActivatedRoute);
        route.push({id: 0});
        expect(spy).toHaveBeenCalledWith(['not-found']);
    });
});
