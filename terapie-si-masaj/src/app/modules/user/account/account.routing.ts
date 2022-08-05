import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AppointmentDefinitionComponent } from './components/appointment-definition/appointment-definition.component';

import { AccountContainerComponent } from './container/account-container.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AccountContainerComponent,
                children: [
                    {
                        path: '',
                        component: AppointmentDefinitionComponent
                    },
                    {
                        path: ':id',
                        component: AccountDetailsComponent

                    },
                ]
            },
        ])
    ],
    exports: [RouterModule]
})
export class AccountRoutingModule { }