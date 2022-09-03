import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-review-dialog',
    templateUrl: './review-dialog.component.html',
    styleUrls: ['./review-dialog.component.scss']
})
export class ReviewDialogComponent {
    form!: FormGroup;

    constructor(public ref: DynamicDialogRef, private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            rating: [0, Validators.required],
            text: ['', Validators.required, Validators.minLength(80), Validators.maxLength(250)]
        })
    }

    discard() {
        this.ref.close();
    }

    save() {
        if (this.form.invalid) {
            return;
        }
        this.ref.close({
            ...this.form.getRawValue()
        })
    }
}



