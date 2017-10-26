/* tslint:disable:no-unused-variable */
import {Location} from '@angular/common';
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';

import {
    HomeComponent,
    SearchComponent,
    routes, AppComponentTest
} from './router-testing-module';

describe('Router Testing Module', () => {

    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [    RouterTestingModule.withRoutes(routes)],
            declarations: [
                HomeComponent,
                SearchComponent,
                AppComponentTest
            ]
        });

        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(AppComponentTest);
        router.initialNavigation();
    });

    it('fakeAsync works', fakeAsync(() => {
        const promise = new Promise((resolve) => {
            setTimeout(resolve, 10);
        });
        let done = false;
        promise.then(() => done = true);
        tick(50);
        expect(done).toBeTruthy();
    }));

    it('navigate to "home" takes you to /home', () => {
        router.navigate([' ']).then(() => {
            expect(location.path()).toBe('/home');
        });
    });
    //
    it('navigate to "search" takes you to /search', () => {
        router.navigate(['/search']).then(() => {
            expect(location.path()).toBe('/search');
        });
    });

    // Check if route exist in route module
    it('should contain route to /search', () => {
        expect(routes).toContain({path: 'search', component: SearchComponent});
    });
});
