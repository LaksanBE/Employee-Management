import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AdminComponent } from './admin/admin.component';
import { TeamLeaderComponent } from './team-leader/team-leader.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@NgModule({
  declarations: [AdminComponent, TeamLeaderComponent, ProjectDetailsComponent ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
