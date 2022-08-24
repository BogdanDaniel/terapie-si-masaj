import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash';
import { Observable } from 'rxjs';
import { BehaviorSubject, map, shareReplay } from 'rxjs';

import { User } from '../models/user.model';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _user = new BehaviorSubject<User | null>(null);

    constructor(private storageService: StorageService, private http: HttpClient) {
    }
    get user() {
        return this._user.asObservable().pipe(shareReplay());
    }

    get isAuthenticated(): Observable<boolean> {
        return this.user.pipe(map((user: User | null) => !isEmpty(user)), shareReplay());
    }

    get isAdmin(): boolean {
        const user = this.storageService.decodeToken();
        return user ? user?.isAdmin : false;
    }


    onAppInit() {
        const user: Partial<User> = this.storageService.getUser();
        if (!isEmpty(user)) {
            this.setUser(new User(user));
        }
    }

    setUser(user: User) {
        this._user.next(user);
    }

    update(id?: string, payload?: Partial<User>) {
        return this.http.put<User>('/api/users/' + id, payload);
    }

    clear() {
        this._user.next(null);
    }
}