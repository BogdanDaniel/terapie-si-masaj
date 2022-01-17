import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppointmentFormComponent } from "./components/appointment-form/appointment-form.component";
import { AppointmentComponent } from "./container/appointment.component";

@NgModule({
    imports: [
        RouterModule.forChild([{
            path: '',
            component: AppointmentComponent,
            children: [
                {
                    path: 'personal',
                    component: AppointmentFormComponent
                }
            ]
        }
        
    ])
    ]
})
export class AppointmentRoutingModule {
    
}