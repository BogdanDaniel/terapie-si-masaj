import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash';
import { AppointmentModel } from 'src/app/shared/models/appointment.model';


@Injectable()
export class AppointmentService {

    constructor(private http: HttpClient) {
    }

    // getAppointment(date: string) {
    //     return this.http.get('/api/appointment?date=' + date);
    // }

    // updateAppointment(id: string, payload: any) {
    //     return this.http.put('/api/appointment/' + id, payload);
    // }
    getAllByUserId(payload: { id: string | undefined, page: number, limit: number }) {
        return this.http.get<{ records: AppointmentModel[], total: number }>(`/api/appointment/getAllByUserId?userId=${payload?.id}&page=${payload?.page}&limit=${payload?.limit}`)
    }
    getAll(payload: { page: number, limit: number, firstName?: string, lastName: string, phone?: string }) {
        const query = [];
        if (!isEmpty(payload?.firstName)) {
            query.push('firstName=' + (payload.firstName));
        }
        if (!isEmpty(payload?.lastName)) {
            query.push('lastName=' + (payload.lastName));

        }
        if (!isEmpty(payload?.phone)) {
            query.push('phone=' + (payload.phone));

        }
        if (payload?.page || payload?.page === 0) {
            query.push('page=' + (payload.page));

        }
        if (payload?.limit) {
            query.push('limit=' + (payload.limit));

        }
        return this.http.get<{ records: AppointmentModel[], total: number }>(`/api/appointment/getAll?` +  query.join('&'))
    }
    saveAppointment(payload: Partial<AppointmentModel>) {
        return this.http.post<AppointmentModel>('/api/appointment', payload);
    }
}

