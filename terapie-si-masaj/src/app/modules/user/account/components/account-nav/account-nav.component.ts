import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationStart, Router } from '@angular/router';
import { takeWhile } from 'rxjs';

@Component({
    selector: 'app-account-nav',
    templateUrl: './account-nav.component.html',
    styleUrls: ['./account-nav.component.scss']
})
export class AccountNavComponent implements OnInit, OnDestroy {
    title: string = '';
    private alive = true;
    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        this.title = this.route?.firstChild?.snapshot?.data['title'];
        this.router.events.pipe(takeWhile(() => this.alive)).subscribe(event => {
            if (event instanceof ActivationStart) {
                this.title = event?.snapshot?.data['title'];
            }
        })
    }

    ngOnDestroy(): void {
        this.alive = false;
    }
}