import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Table } from 'primeng/table';
import { debounceTime, of, Subject } from 'rxjs';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent {
    @Input() data!: any[];
    @Input() selected: any;
    @Input() isLoading: boolean = false;
    @Input() pagination: { page: number, limit: number, total: number } = { page: 0, limit: 10, total: 0 }
    @Input() grid!: any[];
    @Input() filter: boolean = false;
    @Input() scrollHeight: string = '';
    @Output() onLoadLazy = new EventEmitter();
    first = 0;
    globalFilter!: string;
    globalFilterSubject = new Subject();
    limit = 10;
    constructor() {

        this.globalFilterSubject.pipe(
            debounceTime(500)
        ).subscribe(globalFilter => this.onLazyLoad({ page: 0, limit: this.limit }))
    }


    onLazyLoad(ev: any) {
        const { first, rows } = ev;
        const page = (first / rows);
        this.limit = rows;

        this.onLoadLazy.emit({
            pagination: {
                page: page,
                limit: rows
            },
            globalFilter: this.globalFilter
        });
    }

    filterGlobal(ev: any) {
        this.globalFilter = ev?.target?.value;
        this.globalFilterSubject.next(this.globalFilter);

    }


    clear(table: Table) {
        table.clear();
    }

}
