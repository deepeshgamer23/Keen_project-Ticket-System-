import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/SignUp/sign-up.component';
import { MainComponent } from './components/main/main.component';
import { RealLoginComponent } from './components/real-login/real-login.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { Page404Component } from './components/page404/page404.component';
import { NewTicketComponent } from './components/new-ticket/new-ticket.component';

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
    path:'Nticket',
    component:NewTicketComponent,
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
