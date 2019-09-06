import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, NgForm } from '@angular/forms';
import { SkillSurveyService } from './test.service';
import { SliderService } from './slider.service';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name: string;
  userForm: FormGroup;
  skillForm: FormGroup;
  fields: any;

  constructor(
    private fb: FormBuilder,
    private sss: SkillSurveyService,
    public sd: SliderService,
    private router: Router,
    private htps: HttpService
    ) { }

  ngOnInit() {
    this.fields = this.sss.categories;
    this.userForm = this.fb.group({
      type: this.fb.group({
        options: this.fb.array([])
      })
    });
    this.patch();
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    console.log(value);
    // console.log(this.userForm.value.type);
    this.htps.sendSurveydata(value).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl('/userinfo');
      }
    );
  }

  patch() {
    const control =  this.userForm.get('type.options') as FormArray;
    this.fields.forEach(x => {
      control.push(this.patchValues(x.catid, x.catname, x.skill));
    });
  }

  patchValues(cid, label , sarray) {
    this.skillForm = this.fb.group({
      catname: [label],
      catid: [cid],
      choice: this.fb.array([])
    });

    const control = this.skillForm.get('choice') as FormArray;
    sarray.forEach(y => {
      control.push(this.patchskills(y.skillid, y.skillname, y.score));
    });

    return this.skillForm;
  }

  patchskills(sid, sname, sc) {
    return this.fb.group({
      skillid: [sid],
      skillname: [sname],
      score: [sc]
    });
  }

  getControls() {
    return (this.userForm.get('type.options') as FormArray).controls;
  }
}
