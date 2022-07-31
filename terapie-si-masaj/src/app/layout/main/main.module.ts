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
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BadgeModule} from 'primeng/badge';
import { AppCardModule } from 'src/app/modules/app-card/app-app-card.module';
import { AppFlipCardModule } from 'src/app/modules/app-flip-card/app-flip-card.module';
import { PriceListModule } from 'src/app/modules/price-list/price-list.module';
import { UserModule } from 'src/app/modules/user/user.module';




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
    RouterModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    BadgeModule,
    AppCardModule,
    AppFlipCardModule,
    PriceListModule,
    UserModule
  ]
})
export class MainModule { }
