import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { AdminloginService } from 'src/app/services/Adminlogin.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  

  constructor(public service:AdminloginService,public dialogz:MatDialog) { }
  emailId:string='';
  message:string='';
  message1:any;
  validForgotPassword:boolean=false;
  inValidForgotPassword: boolean;
  ngOnInit(): void {
  }
  submit(form: NgForm){
    this.resetForm();
    this.validForgotPassword=false;
    if(form.invalid==true){
      console.log(form.invalid)
      this.message1="*Please Enter Email Id";
      
     }
     else{
      this.service.forgotPassword(form.value.email_id).subscribe((res) => {
        var status = res["response_code"];
       if(status==200){
          this.validForgotPassword=true;
          this.message=res["response_message"];
       }
       else{
        this.inValidForgotPassword=true;
        this.message="Email is is not registerd with us.";
       }
      })
     }
      
    }

    resetForm(form?: NgForm) {
      if (form = null)
        form.resetForm();
      this.service.formData = {
        email:null,
        password:""
        
      }
  
    }
    cancel(){
      this.dialogz.closeAll()
    }
}
