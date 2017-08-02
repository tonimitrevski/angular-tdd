/**
 * Created by toni on 30.6.17.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class UsersService {
    public isLoggedIn = true;
    public user: { name: 'Test User'};


    getQuote() {
        return new Promise((resolve, reject) => {
            resolve('Toni');
        });
    }
}
