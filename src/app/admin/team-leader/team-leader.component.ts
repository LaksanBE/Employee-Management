import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { MatRadioChange } from '@angular/material/radio/typings/public-api';

@Component({
  selector: 'app-team-leader',
  templateUrl: './team-leader.component.html',
  styleUrls: ['./team-leader.component.css']
})
export class TeamLeaderComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private httpService: HttpService) { }
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  r: string;
  s: string;

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this.formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
  }
  onChange(mrChange: MatRadioChange) {
    const gender =  mrChange.value;
    if (gender === 'male') {
       this.r = 'male';
    }
    if (gender === 'female') {
     this.r = 'female';
  }
 }
 onStatus(crct: MatRadioChange) {
  const status =  crct.value;
  if (status === 'active') {
     this.s = 'ACTIVE';
  }
  if (status === 'inactive') {
   this.s = 'INACTIVE';
}
}
  // tslint:disable-next-line: max-line-length
  insert( ename: string, mob: number, email1: string, qualification: string, dob1: Date, exp1: string, rid: number, uid: string, password1: string, passhint: string) {

   const dataInfo = {
      name: ename,
      gender: this.r,
      mobile: mob,
      email: email1,
      dob: dob1,
      qualificationMajor: qualification,
      experience: exp1,
      roleId: rid,
      userId: uid,
      password: password1,
      passwordHint: passhint,
      employeeStatus: this.s
};
   console.log(dataInfo);
   this.httpService.postMethod('employee/insert', dataInfo).subscribe((data: any ) => {
        console.log(dataInfo);
        console.log('success');
    });

  }
  // tslint:disable-next-line: max-line-length
  update(eid: number, ename: string, gender1: string, mob: string, email1: string, qualification: string, dob1: Date, exp1: string, rid: number, uid: number, password1: string, passhint: string, pid: number) {
    const dataInfo = {
      employeeId: eid,
      name: ename,
      roleId: rid,
      userId: uid,
      password: password1,
      passwordHint: passhint,
      gender: this.r,
      mobile: mob,
      email: email1,
      dob: dob1,
      qualificationMajor: qualification,
      experience: exp1,
      projectId: pid,
      employeeStatus: this.s
};
    this.httpService.postMethod('employee/update', dataInfo).subscribe((data: any ) => {
        console.log(data);
    });

  }
  search(eid: string) {
    const dataInfo = {
      employeeId: eid,
};
    this.httpService.postMethod('search', dataInfo).subscribe((data: any ) => {
        console.log(data);
    });

  }

}
