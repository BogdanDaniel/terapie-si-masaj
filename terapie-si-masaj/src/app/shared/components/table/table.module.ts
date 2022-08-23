import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TableComponent } from './table.component';

import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';





@NgModule({
    declarations: [
        TableComponent
    ],
    imports: [
        CommonModule,
        TableModule,
         ButtonModule
    ],
    providers: [],
    exports: [TableComponent]
})
export class AppTableModule { }
