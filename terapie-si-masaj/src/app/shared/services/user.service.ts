import { Injectable } from "@angular/core";
import { isEmpty } from "lodash";
import { BehaviorSubject, shareReplay, Subject } from "rxjs";
import { User } from "../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _user = new BehaviorSubject<User | null>(null);

    constructor() {

    }
    get user() {
        return this._user.asObservable().pipe(shareReplay());
    }

    setUser(user: User) {
        this._user.next(user);
    }

    isLoggedIn() {
        return !isEmpty(this._user.value);
    }
}