import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
constructor(private userService: UserService) { }

    ngOnInit() {
    }
}
