import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PriceListContainerComponent } from 'src/app/modules/price-list/container/price-list-container.component';
import { AuthenticatedGuard } from 'src/app/shared/guards/auth.guard';

import { HomeComponent } from '../home/home.component';
import { MainComponent } from './main.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: MainComponent,
                children: [
                    {
                        path: '',
                        component: HomeComponent
                    },
                    {
                        path: 'programare',
                        loadChildren: () => import('../../modules/appointment/appointment.module').then(mod => mod.AppointmentModule)
                    },
                    {
                        path: 'masaje',
                        loadChildren: () => import('../../modules/massages/massages.module').then(mod => mod.MassagesModule)
                    },
                    {
                        path: 'tarife',
                        component: PriceListContainerComponent
                    },
                    {
                        path: 'auth',
                        loadChildren: () => import('../../modules/user/user.module').then(mod => mod.UserModule)
                    },
                    {
                        path: 'my-account',
                        loadChildren: () => import('../../modules/user/account/account.module').then(mod => mod.AccountModule),
                        canLoad: [AuthenticatedGuard]
                    },
                    {
                        path: '**',
                        redirectTo: '/'
                    }
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class MainRoutingModule { }