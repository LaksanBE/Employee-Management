import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './services/user.service';
import { HttpService } from './services/http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  isLoggedIn: boolean;
  constructor(
      private router: Router,
      private userService: UserService,
      private httpService: HttpService
  ) {

  }
  ngOnInit(): void {
    this.isLoggedIn = this.userService.getUserLoginStatus();
  }
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
    this.userService.setUserLoginStatus(this.isLoggedIn);
  }
  check(id1: string, name1: string) {
    const dataInfo = {
     userName: id1,
     password: name1

     };
    this.httpService.postMethod('user/login', dataInfo).subscribe((data: any) => {
    });
  }

  logout() {
      this.router.navigate(['/login']);
  }
}
