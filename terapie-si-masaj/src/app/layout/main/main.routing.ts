import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { MainComponent } from './main.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: MainComponent,
                children: [
                    {
                        path: '',
                        component: HomeComponent
                    },
                    {
                        path: 'programare',
                        loadChildren: () => import('../../modules/appointment/appointment.module').then(mod => mod.AppointmentModule)
                    }]
            }
        ])
    ],
    exports: [RouterModule]
})
export class MainRoutingModule { }