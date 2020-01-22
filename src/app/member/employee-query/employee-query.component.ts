import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-query',
  templateUrl: './employee-query.component.html',
  styleUrls: ['./employee-query.component.css']
})
export class EmployeeQueryComponent implements OnInit {

  constructor() { }
   // Progress Bar
   formatLabel(value: number) {
    if ((value >= 1) && (value < 25)) {
      return value + '%';
    }
    if (value >= 25) {
      return 'Initiated';
    }
    return value;
  }

  ngOnInit() {
  }

}
