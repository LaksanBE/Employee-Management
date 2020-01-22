import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { HttpService } from '../services/http.service';
import { StatusService } from '../services/status.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginStatus = false;
  userState: any;
  constructor(
      private router: Router,
      private httpService: HttpService,
      private statusService: StatusService,
      private userService: UserService
  ) {

  }

  ngOnInit() {

      }


  login(id1: string, name1: string) {

    const adminInfo = {
       adminId: id1,
       password: name1
     };
    // console.log(adminInfo);
    this.httpService.postMethod('admin/login/', adminInfo).subscribe((data: any) => {
      // localStorage.setItem('tokens', JSON.stringify(data));
       console.log(data.password);
       const role = data.role;
       if (data)     {
        this. userState = data;
        this.loginStatus = this.userService.setUserLoginStatus(this.userState);
        localStorage.setItem('tokens', JSON.stringify(data));
        console.log('success');

     // JSON.parse(localStorage.getItem('tokens'));
      } else {
        localStorage.setItem('tokens', null);
        // JSON.parse(localStorage.getItem('tokens'));
      }

       if (data.role === 1) {
        this.router.navigate(['/admin']);
      } else if (data.role === 2) {
        this.router.navigate(['/leader']);
      } else if (data.role === 3) {
        this.router.navigate(['/member']);
      } else {
      this.router.navigate(['/login']);
      }
    },
    (error: any) => {
      console.log('error' + error);
    });
  }
}
