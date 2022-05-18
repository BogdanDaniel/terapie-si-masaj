import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { MassageDetailsComponent } from './components/massage-details/massage-details.component';
import { MassageImageComponent } from './components/massage-image/massage-image.component';
import { MassagesComponent } from './container/massages.component';


import { MassagesRoutingModule } from './massages-routing.module';




@NgModule({
  declarations: [
    MassagesComponent,
    MassageDetailsComponent,
    MassageImageComponent
  ],
  imports: [
    CommonModule,
    MassagesRoutingModule,
    RouterModule,
    StepsModule,
    ToastModule,
    InputTextModule,
    CardModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
  ],
  providers: []
})
export class MassagesModule { }
