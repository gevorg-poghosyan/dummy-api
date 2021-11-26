import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "./shared/services/authentication.service";

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthenticationService,
        private router: Router
    ) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> {
        return this.authService.isAuthenticated().then(isAuth => {
            if (isAuth) {
                return true
            } else {
                this.router.navigate(['/login']);
                return false;
            }
        })
    }
}