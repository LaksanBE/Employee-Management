import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamLeadersComponent } from './team-leaders/team-leaders.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { TeamProgressComponent } from './team-progress/team-progress.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

const routes: Routes = [
   { path: '', component: TeamLeadersComponent,
    // { path: 'leader', component: TeamLeadersComponent,
    children: [
      { path: 'teamprogress', component: TeamProgressComponent },
      { path: 'assigntask', component: AssignTaskComponent},
      { path: 'persondetails', component: PersonDetailsComponent },
      { path: 'projectdetails', component: ProjectDetailsComponent}
     ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderRoutingModule { }
