import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/shared/guards/admin.guard';
import { AuthenticatedGuard } from 'src/app/shared/guards/auth.guard';
import { UserGuard } from 'src/app/shared/guards/user.guard';

import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AppointmentDefinitionComponent } from './components/appointment-definition/appointment-definition.component';
import { AppointmentsHistoryComponent } from './components/appointments-history/appointments-history.component';
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
                        },
                        canActivate: [AdminGuard]
                    },
                    {
                        path: 'my-appointments',
                        component: MyAppointmentsComponent,
                        data: {
                            title: 'Programarile mele'
                        },
                        canActivate: [UserGuard]
                    },
                    {
                        path: 'appointments-history',
                        component: AppointmentsHistoryComponent,
                        data: {
                            title: 'Istoric programari'
                        },
                        canActivate: [AdminGuard]
                    }

                ],
                canActivate: [AuthenticatedGuard]
            },
        ])
    ],
    exports: [RouterModule]
})
export class AccountRoutingModule { }