import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


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

    saveAppointment(payload: any) {
        return this.http.post('/api/appointment', payload);
    }
}

