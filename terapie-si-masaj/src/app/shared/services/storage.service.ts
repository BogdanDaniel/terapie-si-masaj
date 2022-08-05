import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";
import { User } from '../models/user.model';


@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() { }


    setItem(key: string, value: any) {
        localStorage.setItem(key, value);
    }

    getItem(key: string) {
        return localStorage.getItem(key);
    }

    removeItem(key: string) {
        localStorage.removeItem(key,);
    }

    decodeAccessToken(accessToken: string) {
        return jwt_decode(accessToken) as Partial<User>;
    }
}