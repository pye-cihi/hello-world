import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SkillSurveyService } from './shared/test.service';
import { MaterialModule } from './material-module';
import { SliderService } from './test/slider.service';
import { HeaderComponent } from './header/header.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './http.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { UserInfoService } from './shared/userinfo.service';
import { MatVerticalStepperScrollerDirective } from './shared/stepperscroller.directive';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    UserinfoComponent,
    LoadingSpinnerComponent,
    MatVerticalStepperScrollerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SkillSurveyService, SliderService, HttpService, UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
