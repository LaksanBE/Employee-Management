import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamLeaderComponent } from './team-leader/team-leader.component';
import { AdminComponent } from './admin/admin.component';
import { ProjectDetailsComponent } from '../admin/project-details/project-details.component';

const routes: Routes = [
   { path: '', component: AdminComponent,
    // { path: 'admin', component: AdminComponent,
    children: [
      { path: 'add-employees', component: TeamLeaderComponent },
      { path: 'project-details', component: ProjectDetailsComponent },
     ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
