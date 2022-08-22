import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AppCardModule } from 'src/app/modules/app-card/app-app-card.module';
import { AppFlipCardModule } from 'src/app/modules/app-flip-card/app-flip-card.module';
import { PriceListModule } from 'src/app/modules/price-list/price-list.module';
import { UserModule } from 'src/app/modules/user/user.module';

import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing';




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
    UserModule,
    OverlayPanelModule
  ]
})
export class MainModule { }
