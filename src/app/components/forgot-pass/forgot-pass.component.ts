import { Component ,OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent {

  forgotpass:any;
  submitted:boolean = false;

  constructor( private formbuilder:FormBuilder ) { }

  ngOnInit(){
    this.forgotpass = this.formbuilder.group({
        forgot:['',[Validators.required,Validators.email]],
    })
  }

  get f(){return this.forgotpass.controls}

  onClick(){
    if(this.forgotpass.invalid){
      this.submitted = true;
      return;
    }
    else{
      this.submitted = false;
      this.forgotpass.reset();
    }
  }

}
