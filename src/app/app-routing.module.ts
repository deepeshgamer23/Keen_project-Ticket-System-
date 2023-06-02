import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './SignUp/sign-up.component';
import { MainComponent } from './main/main.component';
import { RealLoginComponent } from './real-login/real-login.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
  },
  {
    path:'SignUp',
    component:SignUpComponent,
  },
  {
    path:'Login',
    component:RealLoginComponent,
  },
  {
    path:'forgotPass',
    component:ForgotPassComponent,
  },
  {
    path:'dashboard',
    component:DashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
