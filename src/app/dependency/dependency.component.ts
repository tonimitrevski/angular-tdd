import { Component, OnInit } from '@angular/core';
import {UsersService} from './user.service';

@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
  styleUrls: ['./dependency.component.css']
})
export class DependencyComponent implements OnInit {
  welcome = '';
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.welcome = this.userService.isLoggedIn ?
        'Welcome, ' + this.userService.user.name :
        'Please log in.';
  }

}
