import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { TeamLeadersComponent } from './team-leaders/team-leaders.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TeamProgressComponent } from './team-progress/team-progress.component';
import { LeaderRoutingModule } from './leader-routing.module';
import { ViewProgressComponent } from './view-progress/view-progress.component';
import { ViewQueriesComponent } from './view-queries/view-queries.component';



@NgModule({
  declarations: [
    TeamLeadersComponent,
    AssignTaskComponent,
    PersonDetailsComponent,
    ProjectDetailsComponent,
    TeamProgressComponent,
    ViewProgressComponent,
    ViewQueriesComponent],
    entryComponents: [ViewQueriesComponent],
  imports: [
    // CommonModule,
    // AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    LeaderRoutingModule
  ]
})
export class LeaderModule { }
