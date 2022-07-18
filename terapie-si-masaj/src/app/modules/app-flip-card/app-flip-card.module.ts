import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppCardModule } from '../app-card/app-app-card.module';
import { AppCardComponent } from '../app-card/app-card.component';
import { AppFlipCardComponent } from './app-flip-card.component';




@NgModule({
  declarations: [
    AppFlipCardComponent
  ],
  imports: [
    CommonModule,
    AppCardModule
  ],
  providers: [],
  exports: [
    AppFlipCardComponent,
    AppCardComponent
  ]
})
export class AppFlipCardModule { }
