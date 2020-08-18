import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminloginService } from '../services/Adminlogin.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message="Your email or password is wrong please check..!"
  name:boolean=true;
  remember: any;
  constructor(private router: Router,public service:AdminloginService,private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    if(form.invalid==true){
      console.log(form.invalid)
      this.message="* Invalid email Address";
     }
    this.service.adminlogin(form.value).subscribe((res) => {
      var status = res["response_code"];
      console.log(status)
      if(status!=200){
         this.name=false;
        console.log(status)
      this.message=res["response_message"]
      console.log(this.message)
      }else{
        this.router.navigateByUrl('productDetails');
      }
      console.log(res);
    })
  }

  toggleVisibility(e) {
    this.remember = e.target.checked;
    localStorage.setItem("rememberMe", JSON.stringify(this.remember));
    localStorage.setItem("NewrememberMe", JSON.stringify(this.remember));
   
  }

  ForgotPassword()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = "100%";
    this.dialog.open(ForgotPasswordComponent)
  }

  SignUp()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = "100%";
    this.dialog.open(SignUpComponent)
  }
}
