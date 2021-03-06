// Straight Jasmine - no imports from Angular test libraries
import {ButtonComponent, DependentService, FancyService} from './service';
import {TestBed} from "@angular/core/testing";
import {By} from "@angular/platform-browser";
import {click} from "../../testing/index";
///////// Fakes /////////
export class FakeFancyService extends FancyService {
    value = 'faked value';
}
describe('FancyService without the TestBed', () => {
    let service: FancyService;

    beforeEach(() => { service = new FancyService(); });

    it('#getValue should return real value', () => {
        expect(service.getValue()).toBe('real value');
    });

    it('#getAsyncValue should return async value', (done: DoneFn) => {
        service.getAsyncValue().then(value => {
            expect(value).toBe('async value');
            done();
        });
    });

    it('#getTimeoutValue should return timeout value',  (done: DoneFn) => {
        service = new FancyService();
        service.getTimeoutValue().then(value => {
            expect(value).toBe('timeout value');
            done();
        });
    });

    it('#getObservableValue should return observable value', (done: DoneFn) => {
        service.getObservableValue().subscribe(value => {
            expect(value).toBe('observable value');
            done();
        });
    });

});

describe('DependentService without the TestBed', () => {
    let service: DependentService;

    it('#getValue should return real value by way of the real FancyService', () => {
        service = new DependentService(new FancyService());
        expect(service.getValue()).toBe('real value');
    });

    it('#getValue should return faked value by way of a fakeService', () => {
        service = new DependentService(new FakeFancyService());
        expect(service.getValue()).toBe('faked value');
    });

    it('#getValue should return faked value from a fake object', () => {
        const fake =  { getValue: () => 'fake value' };
        service = new DependentService(fake as FancyService);
        expect(service.getValue()).toBe('fake value');
    });

    it('#getValue should return stubbed value from a FancyService spy', () => {
        const fancy = new FancyService();
        const stubValue = 'stub value';
        const spy = spyOn(fancy, 'getValue').and.returnValue(stubValue);
        service = new DependentService(fancy);

        expect(service.getValue()).toBe(stubValue, 'service returned stub value');
        expect(spy.calls.count()).toBe(1, 'stubbed method was called once');
        expect(spy.calls.mostRecent().returnValue).toBe(stubValue);
    });
});

describe('ButtonComp', () => {
    let comp: ButtonComponent;
    beforeEach(() => comp = new ButtonComponent());

    it('#isOn should be false initially', () => {
        expect(comp.isOn).toBe(false);
    });

    it('#clicked() should set #isOn to true', () => {
        comp.clicked();
        expect(comp.isOn).toBe(true);
    });

    it('#clicked() should set #message to "is on"', () => {
        comp.clicked();
        expect(comp.message).toMatch(/is on/i);
    });

    it('#clicked() should toggle #isOn', () => {
        comp.clicked();
        expect(comp.isOn).toBe(true);
        comp.clicked();
        expect(comp.isOn).toBe(false);
    });
});