import {getCurrencies} from './getCurrencies';

describe('Unit tests fundamentals - Arrays and strings', ()=> {
    it('sholud return supported currencies', () => {
        const getCurrenciesVar = getCurrencies();
        expect(getCurrenciesVar).toContain('USD');
        expect(getCurrenciesVar).toContain('AUD');
        expect(getCurrenciesVar).toContain('EUR');
    });
});
