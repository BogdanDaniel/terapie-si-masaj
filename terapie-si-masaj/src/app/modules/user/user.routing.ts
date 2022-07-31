import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PriceListContainerComponent } from 'src/app/modules/price-list/container/price-list-container.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
            }
        ])
    ],
    exports: [RouterModule]
})
export class UserRoutingModule { }