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
import { CarouseModule } from 'src/app/shared/components/carousel/carousel.module';
import { TestimonialsModule } from 'src/app/shared/components/testimonials/testimonials.module';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';
import { AboutMeComponent } from '../about-me/about-me.component';

import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { InfoComponent } from '../info/info.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.routing';




@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    InfoComponent,
    AboutMeComponent
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
    OverlayPanelModule,
    CarouseModule,
    TestimonialsModule,
    PipesModule
  ]
})
export class MainModule { }
