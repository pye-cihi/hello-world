import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillSurveyService } from './test/test.service';

@Injectable()
export class HttpService {

    baseUrl = 'http://127.0.0.1:5000/';

    constructor(private http: HttpClient) {}

    getUserdata() {
        return this.http.get(this.baseUrl + 'users');
    }

    getSurveydata() {
        // this.http.get(this.baseUrl).subscribe(
        //     response => {
        //         this.sss.categories = response['items'];
        //         console.log(this.sss.categories);
        //     },
        //     error => {
        //         console.log(error);
        //     });
        return this.http.get(this.baseUrl + 'items');
    }
}
