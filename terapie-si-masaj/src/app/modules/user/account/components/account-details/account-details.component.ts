import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { take } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { MessageService } from 'primeng/api';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
    selector: 'app-account-details',
    templateUrl: './account-details.component.html',
    styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
    form: FormGroup;
    user!: User | null;
    constructor(private formBuilder: FormBuilder, private userService: UserService, private cdr: ChangeDetectorRef, private messageService: MessageService, private storageService: StorageService) {
        this.form = this.initForm();
    }
    ngOnInit(): void {
        this.userService.user.pipe(
            take(1)
        ).subscribe((user: User | null) => {
            this.user = user;
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
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const form = this.form.getRawValue();

        this.userService.update(this.user?._id, form).subscribe((user: User) => {
            this.userService.setUser(user);
            this.storageService.saveUser(user);
            this.messageService.add({ severity: 'success', detail: 'Datele au fost actualizate!' });
        })

    }
}