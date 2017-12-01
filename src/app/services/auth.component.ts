import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

const serverURL = "http://localhost:3000";

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post(serverURL+'/login', JSON.stringify({ username: username, password: password }),options)
            .map((response: Response) => {
            let token = response.json() && response.json().token;
            if (token) {
                this.token = token;
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                return true;
            } else {
                return false;
            }
        });
    }
    getUsers(): any {
        return this.http.get(serverURL+'/users?token='+this.token)
            .map((response: Response) => response.json().users);
    }
    logout(): void {
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}