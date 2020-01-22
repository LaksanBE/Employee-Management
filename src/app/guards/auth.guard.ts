import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private userService: UserService, private route: Router) { }
  canActivate(
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  if (this.userService.getUserLoginStatus()) {
  console.log('valid user');
  return true;
  } else {
  this.route.navigate(['/login']);
  console.log('invalid user');
  return false;
  }
  }
}
