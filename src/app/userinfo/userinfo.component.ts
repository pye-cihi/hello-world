import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { People } from './userinfo.service';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { SkillSurveyService } from '../test/test.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  constructor(
    private router: Router,
    private htps: HttpService,
    public sss: SkillSurveyService) { }

  usages: any;
  // Is the People Class useful? Should we simply use []?  ---to be determined
  supervisors: People[];
  supervisees: People[];
  ifsupervisor = false;
  ifseniorsupervisor = false;
  supervisor: People;
  temp = [];

  ngOnInit() {
    // GET all users from backend when the App is initiated
    this.htps.getUserdata().subscribe(
      data => {
        this.supervisors = data['users'];
        console.log(this.supervisors);
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    /// send this value to back end ...
    console.log(value);
    let param1 = 0;
    let param2 = 0;
    let param3 = 0;
    if (value['supervisor'] !== '') {param1 = value['supervisor']; }
    if (value['use'] !== undefined) {param2 = value['use']; }
    if (value['supervisee'] !== undefined) {param3 = value['supervisee']; }
    const temp_value = '/' + param1 + '/' + param2 + '/' + param3;

    //  I am sending data to back end and getting data back     ---Start
    this.htps.getSurveydata(temp_value).subscribe(
      data => {
        // Get the data from back end
        //  and pass it to a temp object, which can be utilized by the Survey component
        this.sss.categories = data['items'];
        console.log(this.sss.categories);

        // The Navigation will initiate the Survey Component!
        this.router.navigateByUrl('/survey');
        // Only after the navigation, the component is built
      });

    // -------------------------------------------------------------End
  }

  onSelectSup(event) {
    const sid = event.source.value;
    for (const s of this.supervisors) {
      if (s.eid === sid) {
        this.supervisor = s;
        break;
      }
    }

    if (this.supervisor.rid > 2) {
      this.ifsupervisor = true;
    } else {this.ifsupervisor = false; }

    if (this.supervisor.rid > 3) {
      this.supervisees = this.supervisor.employee;
      this.ifseniorsupervisor = true;
    } else {this.ifseniorsupervisor = false; }
  }
}
