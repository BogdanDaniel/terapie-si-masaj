import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { UserService } from '../services/user.service';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanLoad {

    constructor(private userService: UserService, private router: Router) {
    }

    canActivate(): Observable<boolean> | boolean {
        return this.canAccess();
    }

    canLoad(): Observable<boolean> | Promise<boolean> | boolean {
        return this.canAccess();
    }

    private canAccess(): Observable<boolean> {
        const canAccess = this.userService.isAdmin;
        if (!canAccess) {
            this.router.navigate(['/']);
        }
        return of(canAccess)
    }
}
