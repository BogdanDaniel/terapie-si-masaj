import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { get } from 'lodash';
import { switchMap } from 'rxjs';

import { Credentiales } from '../../models/credentiales.model';
import { UserResponse } from '../../models/user-response.model';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    form: UntypedFormGroup;
    constructor(private formBuilder: UntypedFormBuilder, private readonly authService: AuthService, private router: Router, private route: ActivatedRoute) {
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

        this.authService.login(this.getCredentiales(form)).pipe(switchMap((res: UserResponse) => this.route.queryParams)).subscribe((params: Params) => {
            const returnUrl = get(params, 'returnUrl');
            if (returnUrl) {
                this.router.navigate(['/'], { queryParams: { scrollTo: returnUrl } })
            } else {
                this.router.navigate(['/my-account']);
            }
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