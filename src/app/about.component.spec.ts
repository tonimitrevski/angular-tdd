import {AboutComponent} from './about.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HighlightDirective} from './shared/highlight.directive';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('About component test', () => {

    const comp:    AboutComponent = '';
    const app:    AboutComponent = '';
    let fixture: ComponentFixture<AboutComponent>;

    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [ AboutComponent, HighlightDirective],
            schemas:      [ NO_ERRORS_SCHEMA ]
        })
            .createComponent(AboutComponent);
        fixture.detectChanges(); // initial binding
    });

    it('should have skyblue', () => {
        const de = fixture.debugElement.query(By.css('h2'));
        const bgColor = de.nativeElement.style.backgroundColor;
        expect(bgColor).toBe('skyblue');
    });
});
