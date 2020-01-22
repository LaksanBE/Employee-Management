import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';
import { EmployeeQueryComponent } from './employee-query/employee-query.component';
import { TeamMembersComponent } from './team-members/team-members.component';

const routes: Routes = [
   { path: '', component: TeamMembersComponent,
    // { path: 'member', component: TeamMembersComponent,
    children: [
      { path: 'displayemp', component: DisplayEmployeeComponent },
      { path: 'empquerry', component: EmployeeQueryComponent}
     ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
