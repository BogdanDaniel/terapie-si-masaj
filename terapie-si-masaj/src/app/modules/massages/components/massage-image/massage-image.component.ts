import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-massage-image',
    templateUrl: './massage-image.component.html',
    styleUrls: ['./massage-image.component.scss']
})
export class MassageImageComponent implements OnInit {
    @Input() details: any;

    get src() {
        return '../../../../../../../assets/' + this.details.imageUrl;
    }

    constructor() { }

    ngOnInit() {

    }

    ngOnDestroy() {
    }

}
