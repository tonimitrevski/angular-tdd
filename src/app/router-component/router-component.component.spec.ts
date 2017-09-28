import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import { RouterComponentComponent} from './router-component.component';
import {By} from '@angular/platform-browser';
import {ActivatedRoute,Router} from '@angular/router';
import {Hero} from '../model/hero';
import {UsersService} from '../dependency/user.service';
import {click} from '../helpers/clickHelper';
import {ActivatedRouteStub} from '../helpers/router-stubs';

class RouterStub {
    navigateByUrl(url: string) { return url; }
}

describe('Router Component', () => {
  let component: RouterComponentComponent;
  let fixture: ComponentFixture<RouterComponentComponent>;
  let heroEl;
  let expectedHero;
  let userService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterComponentComponent ],
      providers: [
          UsersService,
          {provide: Router, useClass: RouterStub }
      ]
    })
    .compileComponents(); // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterComponentComponent);
    component = fixture.componentInstance;
    heroEl  = fixture.debugElement.query(By.css('.hero')); // find hero element

    // pretend that it was wired to something that supplied a hero
    expectedHero = new Hero(42, 'Radmila');
    component.hero = expectedHero;
    fixture.detectChanges(); // trigger initial data binding
    // UserService from the root injector
    userService = TestBed.get(UsersService);
  });

  it('Router component should be created', () => {
    expect(component).toBeTruthy();
  });

    /**
     * Test routing component
     */
  it('should tell ROUTER to navigate when hero clicked',
    inject([Router], (router: Router) => { // ...

        const spy = spyOn(router, 'navigateByUrl');

        component.gotoDetail(component.hero.id);

        // args passed to router.navigateByUrl()
        const navArgs = spy.calls.first().args[0];

        // expecting to navigate to id of the component's first hero
        const id = component.hero.id;
        expect(navArgs).toBe('/heroes/' + id,
            'should nav to HeroDetail for first hero');
    }));
});
