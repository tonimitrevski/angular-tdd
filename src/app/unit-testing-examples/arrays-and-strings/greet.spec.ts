import {greet} from './greet';

describe('Unit tests fundamentals - Arrays and strings ', () => {
    it('should include name in message', () => {
        const greetVar = greet('radmila');
        expect(greetVar).toContain('radmila');
    });
});