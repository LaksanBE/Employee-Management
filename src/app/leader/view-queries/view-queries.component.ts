import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-queries',
  templateUrl: './view-queries.component.html',
  styleUrls: ['./view-queries.component.css']
})
export class ViewQueriesComponent implements OnInit {
 display: string;

  constructor() { }

  ngOnInit() {
  }
  close() {
    this.display = 'none';
  }

}
