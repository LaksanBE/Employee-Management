import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  userStatus = false;
  setStatus(userState: any) {
    if (userState) {
    this.userStatus = true;
  }
    return this.userStatus;
 }

}
