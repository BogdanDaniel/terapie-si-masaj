import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderComponent } from '../header/header.component';
import { MainRoutingModule } from './main.routing';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';




@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    ButtonModule,
    CardModule,
    RouterModule
  ]
})
export class MainModule { }
