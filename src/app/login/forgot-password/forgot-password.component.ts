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
  inValidForgotPassword: boolean;

  constructor(public service:AdminloginService,public dialogz:MatDialog) { }
  emailId:string='';
  message:string='';
  validForgotPassword:boolean=false;
  ngOnInit(): void {
  }
  submit(form: NgForm){
    if(form.invalid==true){
      console.log(form.invalid)
      this.message="* Invalid email Address";
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
    cancel(){
      this.dialogz.closeAll()
    }
}
