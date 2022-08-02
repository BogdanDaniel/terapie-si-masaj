import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { StorageService } from 'src/app/shared/services/storage.service';
import { UserService } from 'src/app/shared/services/user.service';
import { Credentiales } from '../models/credentiales.model';
import { UserResponse } from '../models/user-response.model';

@Injectable()
export class AuthService {

    constructor(private http: HttpClient, private userService: UserService, private storageService: StorageService) { }


    login(credentiales: Credentiales) {
        return this.http.post<UserResponse>('/api/auth', credentiales).pipe(
            tap((res: UserResponse) => {
                this.storageService.setItem('access-token', res.token);
                this.userService.setUser(res.user);
            })
        );
    }

    register(credentiales: Credentiales) {
        return this.http.post<Credentiales>('/api/users', credentiales);
    }
}