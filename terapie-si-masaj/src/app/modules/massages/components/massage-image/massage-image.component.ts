import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-massage-image',
    templateUrl: './massage-image.component.html',
    styleUrls: ['./massage-image.component.scss']
})
export class MassageImageComponent implements OnInit {

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(data => console.log(data, 'params'))
    }

    ngOnDestroy() {
    }

}
