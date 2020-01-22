import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.project = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
