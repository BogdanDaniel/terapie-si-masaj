import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AppointmentComponent } from './container/appointment.component';
import { AppointmentService } from './services/appointment.service';

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
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    PipesModule
  ],
  providers: [MessageService, AppointmentService]
})
export class AppointmentModule { }
