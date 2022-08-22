import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/shared/guards/auth.guard';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AppointmentDefinitionComponent } from './components/appointment-definition/appointment-definition.component';

import { AccountContainerComponent } from './container/account-container.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AccountContainerComponent,
                data: {
                    title: 'Contul meu'
                },
                children: [
                    {
                        path: 'appointment-definition',
                        component: AppointmentDefinitionComponent,
                        data: {
                            title: 'Definire program'
                        }
                    },
                    {
                        path: ':id',
                        component: AccountDetailsComponent

                    },
                ],
                canActivate: [AuthenticatedGuard]
            },
        ])
    ],
    exports: [RouterModule]
})
export class AccountRoutingModule { }