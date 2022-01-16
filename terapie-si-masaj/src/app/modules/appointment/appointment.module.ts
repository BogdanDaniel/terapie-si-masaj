import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentComponent } from './container/appointment.component';
import { RouterModule } from '@angular/router';
import {StepsModule} from 'primeng/steps';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';




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
    ReactiveFormsModule,
    FormsModule,
    ButtonModule
  ],
  providers: [MessageService]
})
export class AppointmentModule { }
