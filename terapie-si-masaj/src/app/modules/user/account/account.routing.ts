import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticatedGuard } from 'src/app/shared/guards/auth.guard';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AppointmentDefinitionComponent } from './components/appointment-definition/appointment-definition.component';
import { MyAppointmentsComponent } from './components/my-appointments/my-appointments.component';

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
                        path: '',
                        component: AccountDetailsComponent

                    },
                    {
                        path: 'appointment-definition',
                        component: AppointmentDefinitionComponent,
                        data: {
                            title: 'Definire program'
                        }
                    },
                    {
                        path: 'my-appointments',
                        component: MyAppointmentsComponent,
                        data: {
                            title: 'Programarile mele'
                        }
                    }

                ],
                canActivate: [AuthenticatedGuard]
            },
        ])
    ],
    exports: [RouterModule]
})
export class AccountRoutingModule { }