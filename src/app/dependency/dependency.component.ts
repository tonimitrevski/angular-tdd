import { Component, OnInit } from '@angular/core';
import {UsersService} from './user.service';

@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
  styleUrls: ['./dependency.component.css']
})
export class DependencyComponent implements OnInit {
  quote: any = '';
  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getQuote().then(quote => this.quote = quote);
  }

}
