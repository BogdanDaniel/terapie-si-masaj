import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

const TOKEN_KEY = 'access-token';
const REFRESHTOKEN_KEY = 'refresh-token';
const USER_KEY = 'user';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() { }

    public getToken(): string | null {
        return localStorage.getItem(TOKEN_KEY);
    }


    public getRefreshToken(): string | null {
        return localStorage.getItem(REFRESHTOKEN_KEY);
    }

    public getUser(): any {
        const user = localStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        return {};
    }

    public saveUser(user: any): void {
        localStorage.removeItem(USER_KEY);
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    }

    public saveToken(token: string): void {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.setItem(TOKEN_KEY, token);
        const user = this.getUser();
        if (user.id) {
            this.saveUser({ ...user, accessToken: token });
        }
    }

    public decodeToken(): any {
        const token = this.getToken();
        return token ? jwt_decode(token) : null;
    }

    public saveRefreshToken(token: string): void {
        localStorage.removeItem(REFRESHTOKEN_KEY);
        localStorage.setItem(REFRESHTOKEN_KEY, token);
    }

    public signOut(): void {
        localStorage.clear();
    }

}