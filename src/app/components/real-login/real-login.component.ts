import { Component ,OnInit } from '@angular/core';
import {FormBuilder , FormGroup , FormControl , Validators} from '@angular/forms'
import { from } from 'rxjs';

@Component({
  selector: 'app-real-login',
  templateUrl: './real-login.component.html',
  styleUrls: ['./real-login.component.scss']
})
export class RealLoginComponent {
  title = 'LoginForm'
  
  LoginForm:any;
  submitted:boolean = false;

  constructor (private formBuilder:FormBuilder){}

  ngOnInit(){
    this.LoginForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    });
  }


  get f(){return this.LoginForm.controls};


  onSignIn(){
    if(this.LoginForm.invalid){
      this.submitted = true;
      return;
    }
    else{
      this.submitted = false;
      this.LoginForm.reset;
    }
  }
}
