import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthenticatedGuard } from "src/app/shared/guards/auth.guard";
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
            ],
            canActivate: [AuthenticatedGuard]
        }
        
    ])
    ]
})
export class AppointmentRoutingModule {
    
}