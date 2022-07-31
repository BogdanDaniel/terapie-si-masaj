import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { UserRoutingModule } from './user.routing';


@NgModule({
    declarations: [

    ],
    imports: [
        AuthModule,
        UserRoutingModule
    ],
    providers: [],
    bootstrap: []
})
export class UserModule { }
