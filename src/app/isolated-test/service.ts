////////// Services ///////////////
import {Observable} from 'rxjs/Observable';
import {Component, Injectable} from '@angular/core';

@Injectable()
export class FancyService {
    protected value = 'real value';

    getValue() { return this.value; }
    setValue(value: string) { this.value = value; }

    getAsyncValue() { return Promise.resolve('async value'); }

    getObservableValue() { return Observable.of('observable value'); }

    getTimeoutValue() {
        return new Promise((resolve) => {
            setTimeout(() => { resolve('timeout value'); }, 10);
        });
    }

    // getObservableDelayValue() {
    //     return Observable.of('observable delay value').delay(10);
    // }
}

@Injectable()
export class DependentService {
    constructor(private dependentService: FancyService) { }
    getValue() { return this.dependentService.getValue(); }
}

////////// Components ///////////////
@Component({
    selector: 'app-button-comp',
    template: `
    <button (click)="clicked()">Click me!</button>
    <span>{{message}}</span>`
})
export class ButtonComponent {
    isOn = false;
    clicked() { this.isOn = !this.isOn; }
    get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
}