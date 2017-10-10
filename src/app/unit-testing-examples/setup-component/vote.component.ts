/**
 * Simple cote component function
 */
export class VoteComponent {
    totalVotes = 0;

    upVote() {
        this.totalVotes++;
    }

    downVote() {
        this.totalVotes--;
    }
}
