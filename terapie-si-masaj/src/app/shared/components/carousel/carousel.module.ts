import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { CarouselComponent } from './carousel.component';



@NgModule({
    declarations: [
        CarouselComponent
    ],
    imports: [
        CommonModule,
        TableModule,
        ButtonModule,
        InputTextModule
    ],
    providers: [],
    exports: [CarouselComponent]
})
export class CarouseModule { }
