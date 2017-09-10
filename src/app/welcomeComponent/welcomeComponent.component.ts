import { Component, OnInit } from '@angular/core';
import {UsersService} from '../dependency/user.service';

@Component({
    selector: 'app-welcome',
    template: '<h3 class="welcome" ><i>{{welcome}}</i></h3>'
})
export class WelcomeComponent  implements OnInit {
    welcome = '-- not initialized yet --';
    constructor(private userService: UsersService) { }

    ngOnInit(): void {
        this.welcome = this.userService.isLoggedIn ?
            'Welcome toni, ' + this.userService.user.name :
            'Please log in.';
    }
}