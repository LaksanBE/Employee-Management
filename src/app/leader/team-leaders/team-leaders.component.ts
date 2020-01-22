import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ViewQueriesComponent } from '../view-queries/view-queries.component';

@Component({
  selector: 'app-team-leaders',
  templateUrl: './team-leaders.component.html',
  styleUrls: ['./team-leaders.component.css']
})
export class TeamLeadersComponent implements OnInit {

  constructor(private matDialog: MatDialog) { }

  openDialogForTLQuery() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '600px';
    dialogConfig.width = '800px';
    const dialogRef = this.matDialog.open(ViewQueriesComponent, dialogConfig);
  }

  ngOnInit() {
  }

}
