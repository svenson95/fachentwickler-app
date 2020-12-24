// import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
// import {Injectable} from '@angular/core';
// import {BehaviorSubject, Observable, throwError} from 'rxjs';
// import {AuthService} from '../services/auth/auth.service';
// import {catchError, filter, switchMap, take} from 'rxjs/operators';
//
// @Injectable()
// export class Oauth2Interceptor implements HttpInterceptor {
//
//     private isRefreshing = false;
//     private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
//
//     constructor(private auth: AuthService) {
//     }
//
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         const {auth} = this;
//         // We don't want to refresh token for some requests like login or refresh token itself
//         if (this.auth.isRevokeTokenRequest(req)) {
//             return this.interceptRevokeTokenRequest(req, next);
//         }
//
//         if (this.auth.isRefreshTokenRequest(req)) {
//             return this.interceptRefreshTokenRequest(req, next);
//         }
//
//         return next.handle(this.addAuthenticationToken(req)).pipe(
//             catchError(requestError => {
//                 if (auth.isAuthenticated && requestError.status === 401) {
//                     if (this.isRefreshing) {
//                         // If refreshTokenInProgress is true, we will wait until refreshTokenSubject has a non-null value
//                         // – which means the new token is ready and we can retry the request again
//                         return this.refreshTokenSubject.pipe(
//                             filter(r => r !== null),
//                             take(1),
//                             switchMap(() => next.handle(this.addAuthenticationToken(req)))
//                         );
//                     } else {
//                         this.isRefreshing = true;
//                         return this.auth.refresh().pipe(
//                             switchMap(token => {
//                                 // When the call to refreshToken completes we reset the refreshTokenInProgress to false
//                                 // for the next time the token needs to be refreshed
//                                 this.isRefreshing = false;
//                                 this.refreshTokenSubject.next(token);
//
//                                 return next.handle(this.addAuthenticationToken(req));
//                             })
//                         );
//                     }
//                 }
//                 return throwError(requestError);
//             })
//         );
//     }
//
//     interceptRefreshTokenRequest(req: HttpRequest<any>, next: HttpHandler) {
//         return next.handle(req).pipe(
//             catchError(e => {
//                 // error refreshing token, invalidate session
//                 this.auth.invalidate();
//                 return throwError(e);
//             })
//         );
//     }
//
//     addAuthenticationToken(request: HttpRequest<any>) {
//         if (!this.auth.isAuthenticated) {
//             return request;
//         }
//
//         if (this.auth.isRefreshTokenRequest(request)) {
//             // for refresh token requests we don't want to add the auth header
//             return request;
//         }
//
//         return request.clone({
//             setHeaders: {
//                 Authorization: `Bearer ${this.auth.data.access_token}`,
//             },
//         });
//     }
//
//     interceptRevokeTokenRequest(req: HttpRequest<any>, next: HttpHandler) {
//         return next.handle(this.addAuthenticationToken(req));
//     }
// }
