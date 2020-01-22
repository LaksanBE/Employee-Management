
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isLoggedIn: boolean;
  constructor() {
    this.isLoggedIn = false;
  }

  getUserLoginStatus(): boolean {
    return this.isLoggedIn;
  }

  setUserLoginStatus(status: any) {
    if (status) {
    this.isLoggedIn = true;
    }
    return this.isLoggedIn;
  }

}
