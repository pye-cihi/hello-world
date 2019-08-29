import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/userinfo', pathMatch: 'full'},
    { path: 'userinfo', component: UserinfoComponent},
    { path: 'survey', component: TestComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}