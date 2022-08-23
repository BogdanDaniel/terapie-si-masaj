import { ChangeDetectorRef, Component } from '@angular/core';
import { isString, split, toNumber } from 'lodash';
import { catchError, of, tap } from 'rxjs';
import { AppointmentService } from 'src/app/modules/appointment/services/appointment.service';
import { nonEmptyProperties } from 'src/app/shared/constants/utility.const';
import { AppointmentModel } from 'src/app/shared/models/appointment.model';

@Component({
    selector: 'app-appointments-history',
    templateUrl: './appointments-history.component.html',
    styleUrls: ['./appointments-history.component.scss']
})
export class AppointmentsHistoryComponent {
    appointmentsList!: any[];
    isLoading = false;
    pagination = {
        page: 0,
        limit: 10,
        total: 0
    }
    grid: any[];
    constructor(private appointmentService: AppointmentService, private cdr: ChangeDetectorRef) {
        this.grid = [
            {
                text: 'Nume',
                dataKey: 'lastName'
            },
            {
                text: 'Prenume',
                dataKey: 'firstName'
            },
            {
                text: 'Data programare',
                dataKey: 'date'
            },
            {
                text: 'Ora',
                dataKey: 'hour'
            },
            {
                text: 'Telefon',
                dataKey: 'phoneNumber'
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
        this.appointmentService.getAll(this.getPayload(payload)).pipe(
            tap(() => {
                this.isLoading = true;
                this.cdr.markForCheck();
            }),
            catchError(error => {
                this.appointmentsList = [];
                this.isLoading = false;
                this.cdr.markForCheck();
                return of(error)
            })
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

    private getPayload(payload: any): any {
        let params: any = {
            page: payload?.pagination?.page || this.pagination?.page,
            limit: payload?.pagination?.limit || this.pagination?.limit,
        };
        if (isFinite(toNumber(payload?.globalFilter))) {
            params = { ...params, phone: payload?.globalFilter }
        } else if (isString(payload?.globalFilter)) {
            const splitted = split(payload?.globalFilter, ' ');
            if (splitted?.length >= 2) {
                params = {
                    ...params, firstName: splitted[1],
                    lastName: splitted[0]
                }
            }
            if (splitted?.length === 1) {
                params = {
                    ...params,
                    lastName: splitted[0]
                }
            }
        }
        return nonEmptyProperties(params)
    }

}