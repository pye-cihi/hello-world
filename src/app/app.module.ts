import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SkillSurveyService } from './test/test.service';
import { MaterialModule } from './material-module';
import { SliderService } from './test/slider.service';
import { HeaderComponent } from './header/header.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { AppRoutingModule } from './app-routing.module';
import { UserInfoService } from './userinfo/userinfo.service';
import { HttpService } from './http.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    UserinfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SkillSurveyService, SliderService, UserInfoService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
