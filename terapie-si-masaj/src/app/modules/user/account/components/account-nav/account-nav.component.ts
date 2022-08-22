import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-account-nav',
    templateUrl: './account-nav.component.html',
    styleUrls: ['./account-nav.component.scss']
})
export class AccountNavComponent implements OnInit {
    title: string = '';
    constructor(private route: ActivatedRoute) {

    }
    ngOnInit(): void {
        this.title = this.route?.firstChild?.snapshot?.data['title'];
    }
}