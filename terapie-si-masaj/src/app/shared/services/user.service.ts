import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash';
import { BehaviorSubject, map, shareReplay } from 'rxjs';

import { User } from '../models/user.model';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _user = new BehaviorSubject<User | null>(null);

    constructor(private storageService: StorageService) {
    }
    get user() {
        return this._user.asObservable().pipe(shareReplay());
    }

    get isAuthenticated() {
        return this.user.pipe(map(user => !isEmpty(user)), shareReplay());
    }

    onAppInit() {
        const token = this.storageService.getItem('access-token');
        if (token) {
            const decoded: Partial<User> = this.storageService.decodeAccessToken(token);
            this.setUser(new User(decoded));
        }
    }

    setUser(user: User) {
        this._user.next(user);
    }
}