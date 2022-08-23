import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ListboxModule } from 'primeng/listbox';

import { AccountRoutingModule } from './account.routing';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountNavComponent } from './components/account-nav/account-nav.component';
import { AppointmentDefinitionComponent } from './components/appointment-definition/appointment-definition.component';
import { AccountContainerComponent } from './container/account-container.component';

import {SelectButtonModule} from 'primeng/selectbutton';
import { InputTextModule } from 'primeng/inputtext';
import { MyAppointmentsComponent } from './components/my-appointments/my-appointments.component';

import { AppTableModule } from 'src/app/shared/components/table/table.module';


@NgModule({
    declarations: [
        AccountContainerComponent,
        AccountNavComponent,
        AccountDetailsComponent,
        AppointmentDefinitionComponent,
        MyAppointmentsComponent
    ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        ReactiveFormsModule,
        CalendarModule,
        ListboxModule,
        ButtonModule,
        SelectButtonModule,
        InputTextModule,
        AppTableModule
    ],
    providers: [],
    bootstrap: []
})
export class AccountModule { }
