import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { take } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Component({
    selector: 'app-account-details',
    templateUrl: './account-details.component.html',
    styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
    form: FormGroup;

    constructor(private formBuilder: FormBuilder, private userService: UserService, private cdr: ChangeDetectorRef) {
        this.form = this.initForm();
    }
    ngOnInit(): void {
        this.userService.user.pipe(
            take(1)
        ).subscribe((user: User | null) => {
            this.form.setValue({
                email: user?.email,
                name: user?.name
            });
            this.cdr.markForCheck();
        })
    }


    initForm() {
        return this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required]]

        })
    }
    submit() {
        const form = this.form.getRawValue();

        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

    }
}