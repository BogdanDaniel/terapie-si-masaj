import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PriceListContainerComponent } from './container/price-list-container.component';

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '',
            component: PriceListContainerComponent,
        }

        ])
    ]
})
export class PriceListRoutingModule {

}