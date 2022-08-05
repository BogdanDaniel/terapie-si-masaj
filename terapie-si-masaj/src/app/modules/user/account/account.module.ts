import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';

import { AccountRoutingModule } from './account.routing';
import { AccountDetailsComponent } from './components/account-details/account-details.component';
import { AccountNavComponent } from './components/account-nav/account-nav.component';
import { AppointmentDefinitionComponent } from './components/appointment-definition/appointment-definition.component';
import { AccountContainerComponent } from './container/account-container.component';
import { ListboxModule } from 'primeng/listbox';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AppointmentDefinitionService } from './services/appointment-definition.service';




@NgModule({
    declarations: [
        AccountContainerComponent,
        AccountNavComponent,
        AccountDetailsComponent,
        AppointmentDefinitionComponent
    ],
    imports: [
        CommonModule,
        AccountRoutingModule,
        ReactiveFormsModule,
        CalendarModule,
        ListboxModule,
        ButtonModule

    ],
    providers: [AppointmentDefinitionService],
    bootstrap: []
})
export class AccountModule { }
