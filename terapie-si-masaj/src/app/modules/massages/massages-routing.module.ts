import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MassagesComponent } from "./container/massages.component";

@NgModule({
    imports: [
        RouterModule.forChild([
        {
            path: ':id',
            component: MassagesComponent,
        }

        ])
    ]
})
export class MassagesRoutingModule {

}