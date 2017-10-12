import {TodoFormComponent} from './todo-form.component';
import {FormBuilder } from '@angular/forms';

describe('Unit testing- Form testing', () => {
    let component: TodoFormComponent;

    beforeEach(() => {
        component = new TodoFormComponent(new FormBuilder());
    });

    it('should create form with 2 controls', () => {
        expect(component.form.contains('name')).toBe(true);
        expect(component.form.contains('email')).toBe(true);
    });

    it('should make name control required', () => {
        const control = component.form.get('name');

        control.setValue('');

        expect(control.valid).toBeFalsy();
    });
});
