import { ChangeDetectorRef, Component } from '@angular/core';
import { catchError, of, switchMap, take, tap } from 'rxjs';
import { AppointmentService } from 'src/app/modules/appointment/services/appointment.service';
import { AppointmentModel } from 'src/app/shared/models/appointment.model';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
    selector: 'app-my-appointments',
    templateUrl: './my-appointments.component.html',
    styleUrls: ['./my-appointments.component.scss']
})
export class MyAppointmentsComponent {
    appointmentsList!: any[];
    isLoading = false;
    pagination = {
        page: 0,
        limit: 10,
        total: 0
    }
    grid: any[];
    constructor(private userService: UserService, private appointmentService: AppointmentService, private cdr: ChangeDetectorRef) {
        this.grid = [{
            text: 'Data programare',
            dataKey: 'date'
        },
        {
            text: 'Masaj',
            dataKey: 'massage'
        },
        {
            text: 'Durata',
            dataKey: 'duration'
        }];
    }

    getMyAppointments(payload?: any) {
        this.userService.user.pipe(
            take(1),
            tap(() => {
                this.isLoading = true;
                this.cdr.markForCheck();
            }),
            switchMap((user: User | null) => this.appointmentService.getAllByUserId({ id: user?._id, page: payload?.pagination?.page || this.pagination?.page, limit: payload?.pagination?.limit || this.pagination?.limit }).pipe(
                catchError(error => {
                    this.appointmentsList = [];
                    this.isLoading = false;
                    this.cdr.markForCheck();
                    return of(error)
                })
            ))
        ).subscribe((res: { records: AppointmentModel[], total: number }) => {
            this.appointmentsList = res?.records || [];
            this.pagination = { ...this.pagination, total: res?.total }
            this.isLoading = false;
            this.cdr.markForCheck();
        });
    }

    onLoadLazy(ev: any) {
        this.getMyAppointments(ev);
    }

}