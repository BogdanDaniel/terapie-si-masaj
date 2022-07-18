import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { MassageDetailsComponent } from './components/massage-details/massage-details.component';
import { MassageImageComponent } from './components/massage-image/massage-image.component';
import { MassageMoreDetailsComponent } from './components/massages-more-details/massages-more-details.component';
import { MassagesComponent } from './container/massages.component';


import { MassagesRoutingModule } from './massages-routing.module';
import { MassagesService } from './services/massages.service';
import {TabViewModule} from 'primeng/tabview';
import { AppFlipCardModule } from '../app-flip-card/app-flip-card.module';





@NgModule({
  declarations: [
    MassagesComponent,
    MassageDetailsComponent,
    MassageImageComponent,
    MassageMoreDetailsComponent
  ],
  imports: [
    CommonModule,
    MassagesRoutingModule,
    RouterModule,
    StepsModule,
    ToastModule,
    InputTextModule,
    CardModule,
    ButtonModule,
    TabViewModule,
    BadgeModule,
    AppFlipCardModule
  ],
  providers: [MassagesService]
})
export class MassagesModule { }
