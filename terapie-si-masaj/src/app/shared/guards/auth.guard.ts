import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { share } from 'rxjs/operators';

import { UserService } from '../services/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate, CanLoad {

    constructor(private userService: UserService, private router: Router) {
    }

    canActivate(): Observable<boolean> | boolean {
        return this.canAccess();
    }

    canLoad(): Observable<boolean> | Promise<boolean> | boolean {
        return this.canAccess();
    }

    private canAccess(): Observable<boolean> {
        return this.userService.user.pipe(map(user => !!user), tap(canActivate => { if (!canActivate) this.router.navigate(['/']) }), share());
    }
}
