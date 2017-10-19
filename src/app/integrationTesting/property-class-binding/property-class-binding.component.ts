import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-property-class-binding',
  templateUrl: './property-class-binding.component.html',
  styleUrls: ['./property-class-binding.component.css']
})
export class PropertyClassBindingComponent {

    @Input() othersVote = 0;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter();

    upVote() {
        if (this.myVote === 1)
            return;

        this.myVote++;

        this.vote.emit({ myVote: this.myVote });
    }

    downVote() {
        if (this.myVote === -1)
            return;

        this.myVote--;

        this.vote.emit({ myVote: this.myVote });
    }

    get totalVotes() {
        return this.othersVote + this.myVote;
    }
}
