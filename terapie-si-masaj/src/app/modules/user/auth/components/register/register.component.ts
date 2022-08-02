import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { Credentiales } from "../../models/credentiales.model";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
    form!: FormGroup;
    constructor(private formBuilder: FormBuilder, private readonly messageService: MessageService, private readonly authService: AuthService, private router: Router) {
        this.form = this.initForm();
    }


    initForm() {
        return this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
            checked: [false, [Validators.required]]
        })
    }

    register() {
        const form = this.form.getRawValue();
        const { checked } = form;

        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        if (!checked) {
            this.messageService.add({ severity: 'warn', detail: 'Trebuie sa selectati ca sunteti de accord cu Termenii si conditiile' });
            return;
        }

        this.authService.register(this.getCredentiales(form)).subscribe(res => {
            this.router.navigate(['/'])
        });

    }

    getCredentiales(form: any) {
        const { name, email, password } = form;
        return <Credentiales>{
            name,
            email,
            password
        }
    }
}