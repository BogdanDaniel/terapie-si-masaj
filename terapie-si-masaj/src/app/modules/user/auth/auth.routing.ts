import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PriceListContainerComponent } from 'src/app/modules/price-list/container/price-list-container.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: LoginComponent
            }
        ])
    ],
    exports: [RouterModule]
})
export class AuthRoutingModule { }