import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './user-auth/SignUp/sign-up.component';
import { MainComponent } from './main/main.component';
import { RealLoginComponent } from './user-auth/real-login/real-login.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TicketComponent } from './ticket/ticket.component';
import { Page404Component } from './page404/page404.component';

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
  },
  {
    path:'ticket',
    component:TicketComponent,
  },
  {
    path:'**',
    component:Page404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
