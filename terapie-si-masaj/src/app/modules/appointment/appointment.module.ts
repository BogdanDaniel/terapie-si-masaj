import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AppointmentComponent } from './container/appointment.component';





@NgModule({
  declarations: [
    AppointmentComponent,
    AppointmentFormComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    RouterModule,
    StepsModule,
    ToastModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextareaModule
  ],
  providers: [MessageService]
})
export class AppointmentModule { }
