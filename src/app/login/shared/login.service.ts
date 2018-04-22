import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { SERVER_URL } from './../../common/api.config';

@Injectable()
export class LoginService {
    private url = SERVER_URL + 'login/autenticar';

    constructor(private http: Http) { }

    login(username: string, password: string) {
        // return this.http.post<any>(this.url, { username: username, password: password })
        //     .map(user => {
        //         // login successful if there's a jwt token in the response
        //         if (user && user.token) {
        //             // store user details and jwt token in local storage to keep user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify(user));
        //         }

        //         return user;
        //     });
        localStorage.setItem('currentUser', JSON.stringify({ username: 'admin', age: 22 })); //remove
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}