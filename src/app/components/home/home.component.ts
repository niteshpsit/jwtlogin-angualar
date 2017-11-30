import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/auth.component';

@Component({
    templateUrl: 'home.component.html',
})

export class HomeComponent implements OnInit {
    users: any = [];

    constructor(private authenticationService: AuthenticationService) { }

    ngOnInit() {
        // get users from secure api end point
        // this.authenticationService.getUsers()
        //     .subscribe(users => {
        //         this.users = users;
        //     });
        this.users = [{ firstName : "NITESH JATAV", lastName: "KM"},{ firstName : "NITESH JATAV", lastName: "KM"}]
    }

}