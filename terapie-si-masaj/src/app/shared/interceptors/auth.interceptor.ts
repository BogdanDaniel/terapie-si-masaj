import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError } from "rxjs";
import { AuthService } from "src/app/modules/user/auth/services/auth.service";
import { StorageService } from "../services/storage.service";
import { UserService } from "../services/user.service";

const TOKEN_HEADER_KEY = 'Authorization';


@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    constructor(private storageService: StorageService, private authService: AuthService, private userService: UserService, private messageService: MessageService, private router: Router) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Object>> {
        let authReq = req;
        const token = this.storageService.getToken();
        if (token != null) {
            authReq = this.addTokenHeader(req, token);
        }
        return next.handle(authReq).pipe(catchError(error => {
            if (error instanceof HttpErrorResponse && !authReq.url.includes('auth') && error.status === 401) {
                return this.handle401Error(authReq, next);
            }
            return throwError(() => new Error(error?.error));
        }));
    }
    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            const token = this.storageService.getRefreshToken();
            if (token)
                return this.authService.refreshToken(token).pipe(
                    switchMap((token: any) => {
                        this.isRefreshing = false;
                        this.storageService.saveToken(token.accessToken);
                        this.refreshTokenSubject.next(token.accessToken);

                        return next.handle(this.addTokenHeader(request, token.accessToken));
                    }),
                    catchError((err) => {
                        this.isRefreshing = false;
                        this.signOut();
                        this.messageService.add({ severity: 'error', detail: 'Sesiunea a expirat. Ai fost deconectat automat!' });
                        this.router.navigate(['/auth']);
                        return throwError(() => new Error({...err?.error, isHandled: true}));
                    })
                );
        }
        return this.refreshTokenSubject.pipe(
            filter(token => token !== null),
            take(1),
            switchMap((token) => next.handle(this.addTokenHeader(request, token)))
        );
    }
    private addTokenHeader(request: HttpRequest<any>, token: string) {
        /* for Spring Boot back-end */
        // return request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        /* for Node.js Express back-end */
        return request.clone({
            headers: request.headers.set(TOKEN_HEADER_KEY, `Bearer ${token}`,
            )
        });
    }

    private signOut() {
        this.storageService.signOut();
        this.userService.clear();
    }

}