import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { RatingModule } from 'primeng/rating';
import { ReviewDialogComponent } from './components/review-dialog.component';

import { TestimonialsComponent } from './testimonials.component';
import { TestimonialsService } from './testimonials.service';



@NgModule({
    declarations: [
        TestimonialsComponent,
        ReviewDialogComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CarouselModule,
        RatingModule,
        ReactiveFormsModule,
        DynamicDialogModule,
        InputTextareaModule,
        ButtonModule
    ],
    providers: [TestimonialsService],
    exports: [TestimonialsComponent]
})
export class TestimonialsModule { }
