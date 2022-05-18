import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-massage-details',
    templateUrl: './massage-details.component.html',
    styleUrls: ['./massage-details.component.scss']
})
export class MassageDetailsComponent implements OnInit {

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(data => console.log(data, 'params'))
    }

    ngOnDestroy() {
    }

}
