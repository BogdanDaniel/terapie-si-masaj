import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { find } from 'lodash';
import { map, Observable } from 'rxjs';
import { Massage } from '../models/massage.model';

@Injectable({
    providedIn: 'root'
})
export class MassagesService {
    private readonly url = 'assets/data/massages.json'

    constructor(private http: HttpClient) { }


    getAllMasages(): Observable<Massage[]> {
        return this.http.get<Massage[]>(this.url);
    }

    getMassageById(id: string): Observable<Massage | null> {
        return this.getAllMasages().pipe(map((massages: Massage[]) => massages ? (find(massages, massage => massage.id === id) || null) : null));
    }


    // updateScheduleDefinition(id: string, payload: any) {
    //     return this.http.put('/api/scheduleDefinition/' + id, payload);
    // }

    // saveScheduleDefinition(payload: any) {
    //     return this.http.post('/api/scheduleDefinition', payload);
    // }

    // getAvailableSchedule(date: string) {
    //     return this.http.get<number[]>('/api/scheduleDefinition/availableHours?date=' + date);
    // }
}