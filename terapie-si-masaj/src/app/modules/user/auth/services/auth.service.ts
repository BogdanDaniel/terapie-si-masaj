import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Credentiales } from "../models/credentiales.model";

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }


    register(credentiales: Credentiales) {
        return this.http.post<Credentiales>('/api/users', credentiales);
    }
}