import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Credentiales } from '../../models/credentiales.model';
import { UserResponse } from '../../models/user-response.model';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    form: FormGroup;
    constructor(private formBuilder: FormBuilder, private readonly authService: AuthService, private router: Router) {
        this.form = this.initForm();
    }

    initForm() {
        return this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            checked: [false, []]
        })
    }

    login() {
        const form = this.form.getRawValue();

        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.authService.login(this.getCredentiales(form)).subscribe((res: UserResponse) => {
            this.router.navigate(['/my-account']);
        });

    }

    getCredentiales(form: any) {
        const { email, password } = form;
        return <Credentiales>{
            email,
            password
        }
    }
}