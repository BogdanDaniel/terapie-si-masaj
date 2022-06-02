import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-massages-more-details',
    templateUrl: './massages-more-details.component.html',
    styleUrls: ['./massages-more-details.component.scss']
})
export class MassageMoreDetailsComponent  {
    @Input() details: any;
    constructor(private route: ActivatedRoute) { }


    ngOnDestroy() {
    }

}
