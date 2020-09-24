import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SignUp } from 'src/app/models/signup-model';
import { AdminloginService } from 'src/app/services/Adminlogin.service';
import { PopupmessageComponent } from 'src/app/popupmessage/popupmessage.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  message: string;

  signUpData:SignUp=new SignUp();
  constructor(public service:AdminloginService,public dialogz:MatDialog) { }
  visible:boolean=false;
  ngOnInit(): void {
  }
  submit(form: NgForm){
    if(form.invalid==true){
      console.log(form.invalid)
     }
     else{
      this.service.signUpUser(form.value.email_id).subscribe((res) => {
        var status = res["response_code"];
       if(status==200){
         
        this.dialogz.closeAll()
        this.message = "Successfully submitted your request. Thank you";
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = false;
        dialogConfig.width = "100%";
        
        this.dialogz.open(PopupmessageComponent, {
          data: {
            message: this.message,
              }
              
            })
       }
       else{
        
       }
      })
     }
    this.signUpData.country="india";
    console.log(this.signUpData);
  }
  cancel(){
    this.dialogz.closeAll()
  }
  toggleVisibility(e){
    this.visible=e.target.checked;
    console.log(this.visible);
      }
}
