import {VoteComponent} from './vote.component';

describe('Setup component - Vote component', ()=> {
    let component: VoteComponent;

    beforeEach(() => {
        component = new VoteComponent();
    });

    it('should increment total values when incremented', () => {
        component.upVote();
        expect(component.totalVotes).toBe(1);
    });

    it('should decrement total values when decrement called ', () => {
        component.downVote();
        expect(component.totalVotes).toBe(-1);
    });
});
