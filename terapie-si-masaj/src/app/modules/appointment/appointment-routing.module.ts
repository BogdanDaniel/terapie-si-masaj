import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppointmentComponent } from "./container/appointment.component";

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '',
            component: AppointmentComponent
        }])
    ]
})
export class AppointmentRoutingModule {
    
}