import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthCtrlService } from 'src/app/api/services';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authCtrlService: AuthCtrlService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    console.log('CanActivate called')
    let isAdmin;
    this.authCtrlService.authCtrlAuthInfo().subscribe((user) => {
      if (user.role === 'ADMIN') {
        isAdmin = true;
      } else {
        isAdmin = false;
      }

      if (isAdmin) {
        return true;
      } else {
        this.router.navigate(['/'])
        return false;
      }
    });
    return true



  }


}
