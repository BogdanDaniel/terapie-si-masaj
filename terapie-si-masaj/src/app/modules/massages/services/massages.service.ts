import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MassagesService {
    constructor(private http: HttpClient) {

    }


    getMassage(url: string) {
        return this.http.get('assets/data/' + url + '.json');
    }
}