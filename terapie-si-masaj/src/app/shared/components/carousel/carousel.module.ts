import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CarouselComponent } from './carousel.component';



@NgModule({
    declarations: [
        CarouselComponent
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
    exports: [CarouselComponent]
})
export class CarouseModule { }
