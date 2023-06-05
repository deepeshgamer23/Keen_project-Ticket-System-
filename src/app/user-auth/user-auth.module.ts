import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './SignUp/sign-up.component'
import { RealLoginComponent } from './real-login/real-login.component'



@NgModule({
  declarations: [
    SignUpComponent,
    RealLoginComponent,
  ],
  imports: [
    CommonModule,
  ],
  // exports:[
  //   SignUpComponent,
  //   RealLoginComponent,
  // ]
})
export class UserAuthModule { }
