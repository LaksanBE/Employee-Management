import { Component, OnInit } from '@angular/core';
// import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css']
})
export class AssignTaskComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor() { }
  durationInSeconds = 5;
  ngOnInit() {
  }
  // openSnackBar(modulevalue: string) {
  //   const duration = this.durationInSeconds * 1000;
  //   this.snackBar.open(modulevalue);
  // }

}
