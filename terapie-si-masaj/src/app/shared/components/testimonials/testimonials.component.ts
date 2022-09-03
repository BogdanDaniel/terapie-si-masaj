import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { take, takeWhile } from 'rxjs';
import { ReviewModel } from '../../models/review.model';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { ReviewDialogComponent } from './components/review-dialog.component';
import { TestimonialsService } from './testimonials.service';

@Component({
    selector: 'app-testimonials',
    templateUrl: './testimonials.component.html',
    styleUrls: ['./testimonials.component.scss'],
    providers: [DialogService]
})
export class TestimonialsComponent implements OnInit, OnChanges, OnDestroy {
    @Input() open = false;
    reviews: ReviewModel[] = []
    val3: number = 3;
    user!: User | null;
    isAuthenticated: boolean = false;

    showLoginMessage = false;
    private alive = true;

    constructor(public dialogService: DialogService, private userService: UserService, private testimonialsService: TestimonialsService, private router: Router
    ) {
        this.userService.user.pipe(
            takeWhile(() => this.alive)
        ).subscribe(user => {
            this.user = user;
            this.getTestimonials(this.user?._id);
        });

        this.userService.isAuthenticated.pipe(
            takeWhile(() => this.alive)
        ).subscribe(isAuthenticated => {
            this.isAuthenticated = isAuthenticated;
        });
    }

    ngOnInit(): void {

    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['open']?.currentValue) {
            this.openDialog();
        }
    }

    getTestimonials(userId?: string) {
        this.testimonialsService.get({ userId }).subscribe(reviews => {
            this.reviews = reviews;
        })
    }

    openDialog() {
        if (!this.isAuthenticated) {
            this.showLoginMessage = true;
            return;
        }
        const ref = this.dialogService.open(ReviewDialogComponent, {
            width: '28rem',
            height: '28rem',
            styleClass: 'review-dialog',
            closeOnEscape: false,
            closable: false
        });
        ref.onClose.pipe(take(1)).subscribe((review: any) => {
            if (review) {
                this.testimonialsService.save({
                    ...review,
                    username: this.user?.name,
                    userId: this.user?._id
                }).subscribe(() => {
                    this.getTestimonials(this.user?._id);
                });
            }
        });
    }

    goToLogin() {
        this.router.navigate(['/auth'], { queryParams: { returnUrl: 'reviews' } });
    }

    ngOnDestroy(): void {
        this.alive = false;
    }
}



