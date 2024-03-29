import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../../auth/services/auth.service";


@Injectable ({
    providedIn : 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const isAllowed = this.auth.isUserConnected();
        if (isAllowed) {
            return true;
        } else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}