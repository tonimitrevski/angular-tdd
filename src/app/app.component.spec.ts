import {TestBed, async, ComponentFixture} from '@angular/core/testing';

import { AppComponent } from './app.component';
import {BannerComponent} from "./banner.component";
import {RouterLinkStubDirective, RouterOutletStubComponent} from "../testing/router-stubs";
import {Component, DebugElement, NO_ERRORS_SCHEMA} from "@angular/core";
import {By} from "@angular/platform-browser";
let comp:    AppComponent;
let app:    AppComponent;
let fixture: ComponentFixture<AppComponent>;

@Component({selector: 'app-welcome', template: ''})
class WelcomeStubComponent {}

describe('AppComponent & TestModule', () => {
    beforeEach( async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                RouterLinkStubDirective
            ],
            schemas: [ NO_ERRORS_SCHEMA]
        })

            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(AppComponent);
                comp    = fixture.componentInstance;
            });
    }));
    tests();
});

function tests() {
    let links: RouterLinkStubDirective[];
    let linkDes: DebugElement[];

    beforeEach(() => {
        // trigger initial data binding
        fixture.detectChanges();

        // find DebugElements with an attached RouterLinkStubDirective
        linkDes = fixture.debugElement
            .queryAll(By.directive(RouterLinkStubDirective));

        // get the attached link directive instances using the DebugElement injectors
        links = linkDes
            .map(de => de.injector.get(RouterLinkStubDirective) as RouterLinkStubDirective);
    });

    it('can instantiate it', () => {
        expect(comp).not.toBeNull();
    });

    it('can get RouterLinks from template', () => {
        expect(links.length).toBe(3, 'should have 3 links');
        expect(links[0].linkParams).toBe('/dashboard', '1st link should go to Dashboard');
        expect(links[1].linkParams).toBe('/heroes', '1st link should go to Heroes');
    });

    it('can click Heroes link in template', () => {
        const heroesLinkDe = linkDes[1];
        const heroesLink = links[1];

        expect(heroesLink.navigatedTo).toBeNull('link should not have navigated yet');

        heroesLinkDe.triggerEventHandler('click', null);
        fixture.detectChanges();

        expect(heroesLink.navigatedTo).toBe('/heroes');
    });
}
