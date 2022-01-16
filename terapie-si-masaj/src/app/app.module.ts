import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './layout/main/main.module';
import { AppointmentModule } from './modules/appointment/appointment.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    AppointmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
