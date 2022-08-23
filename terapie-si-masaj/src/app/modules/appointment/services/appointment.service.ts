import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
        return this.http.get<{records: AppointmentModel[], total: number}>(`/api/appointment/getAllByUserId?userId=${payload?.id}&page=${payload?.page}&limit=${payload?.limit}`)
    }
    saveAppointment(payload: Partial<AppointmentModel>) {
        return this.http.post<AppointmentModel>('/api/appointment', payload);
    }
}

