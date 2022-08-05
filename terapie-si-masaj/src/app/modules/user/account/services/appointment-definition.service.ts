import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppointmentDefinitionService {

    constructor(private http: HttpClient) { }


    getScheduleDefinition(date: string) {
        return this.http.get('/api/scheduleDefinition?date=' + date);
    }

    updateScheduleDefinition(id: string, payload: any) {
        return this.http.put('/api/scheduleDefinition/' + id, payload);
    }

    saveScheduleDefinition(payload: any) {
        return this.http.post('/api/scheduleDefinition', payload);
    }
}