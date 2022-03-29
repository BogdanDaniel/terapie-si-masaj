import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AppCardComponent } from './app-card.component';




@NgModule({
  declarations: [
    AppCardComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    BadgeModule
  ],
  providers: [],
  exports: [
    AppCardComponent
  ]
})
export class AppCardModule { }
