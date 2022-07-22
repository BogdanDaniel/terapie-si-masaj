import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PriceListContainerComponent } from './container/price-list-container.component';
import { PriceListRoutingModule } from './price-list-routing';





@NgModule({
    declarations: [
        PriceListContainerComponent
    ],
    imports: [
        CommonModule,
        PriceListRoutingModule
    ],
    exports: [
        PriceListContainerComponent
    ]
})
export class PriceListModule { }
