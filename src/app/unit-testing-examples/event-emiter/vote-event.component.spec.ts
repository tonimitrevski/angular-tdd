import {VoteComponent} from './vote-event.component';

describe('Unit testing - Event emitters', () => {
    let component: VoteComponent;

    beforeEach(() => {
        component = new VoteComponent();
    });

    it('should raise event when clicked', () => {
        let totalVotes = null;
        component.voteChanged.subscribe(tv => totalVotes = tv);
        component.upVote();
        expect(totalVotes).not.toBeNull();
    });

});
