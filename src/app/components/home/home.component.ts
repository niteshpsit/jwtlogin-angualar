import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/auth.component';

@Component({
    templateUrl: 'home.component.html',
})

export class HomeComponent implements OnInit {
    users: any = [];

    constructor(private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.authenticationService.getUsers()
            .subscribe(users => {
                this.users = users;
            });
    }

}