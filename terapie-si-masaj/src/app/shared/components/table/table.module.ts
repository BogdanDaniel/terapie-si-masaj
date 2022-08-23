import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { TableComponent } from './table.component';


@NgModule({
    declarations: [
        TableComponent
    ],
    imports: [
        CommonModule,
        TableModule,
        ButtonModule,
        InputTextModule
    ],
    providers: [],
    exports: [TableComponent]
})
export class AppTableModule { }
