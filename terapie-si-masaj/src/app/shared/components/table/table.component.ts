import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
    @Input() data!: any[];
    @Input() selected: any;
    @Input() isLoading: boolean = false;
    @Input() pagination: { page: number, limit: number, total: number } = { page: 0, limit: 10, total: 0 }
    @Input() grid!: any[];
    @Output() onLoadLazy = new EventEmitter();
    first = 0;
    constructor() { }

    ngOnInit() {
    }

    onLazyLoad(ev: any) {
        const { first, rows } = ev;
        const page = (first / rows);

        this.onLoadLazy.emit({
            pagination: {
                page: page,
                limit: rows
            }
        });
    }

    ngOnDestroy() {
    }

}
