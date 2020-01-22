import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MemberRoutingModule } from './member-routing.module';

import { TeamMembersComponent } from './team-members/team-members.component';
import { EmployeeQueryComponent } from './employee-query/employee-query.component';
import { DisplayEmployeeComponent } from './display-employee/display-employee.component';



@NgModule({
  declarations: [EmployeeQueryComponent, DisplayEmployeeComponent, TeamMembersComponent],
  imports: [
    CommonModule,
    MaterialModule,
    MemberRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MemberModule { }
