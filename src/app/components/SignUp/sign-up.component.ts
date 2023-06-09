import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  SignForm: any;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.SignForm = this.formBuilder.group({
      fullname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      number:['',Validators.required],
      pass:['',Validators.required],
      conPass:['',Validators.required],
      checkbox:[false,Validators.requiredTrue],
    })
  }


  get f(){return this.SignForm.controls}

  onSignup(){
    if(this.SignForm.invalid){
      this.submitted = true;
      return;
    }
    else{
      this.submitted = false;
      this.SignForm.reset();
    }
  }
}
