import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-massage-details',
    templateUrl: './massage-details.component.html',
    styleUrls: ['./massage-details.component.scss']
})
export class MassageDetailsComponent implements OnInit {
    @Input() details: any;
    constructor(private router: Router) { }

    ngOnInit() {
    }

    goToAppointment() {
        this.router.navigate(['programare']);
    }

    ngOnDestroy() {
    }

}
