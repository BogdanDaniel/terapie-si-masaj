import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth.routing';
import { LoginComponent } from './components/login/login.component';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        AuthRoutingModule,
        CheckboxModule,
        FormsModule
    ],
    providers: [],
    bootstrap: []
})
export class AuthModule { }
