import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminloginService } from '../services/Adminlogin.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Router } from '@angular/router';
import { ForgotPassword, SignUp } from '../models/Login-model';
import { PopupmessageComponent } from '../popupmessage/popupmessage.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message=""
  name:boolean=true;
  remember: any;
  show: boolean;
  visible:boolean=false;
  signUpData:SignUp=new SignUp();
  emailId:string='';
  validForgotPassword:boolean=false;
  inValidForgotPassword:boolean=false;
  message1: string;
  inValidSignUp:boolean=false;
  validSignUp:boolean=false;
  inValidLogin:boolean=false;
  validLogin:boolean=false;
  message2: string;
  constructor(private router: Router,public service:AdminloginService,private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  toggleVisibility(e) {
    this.remember = e.target.checked;
    localStorage.setItem("rememberMe", JSON.stringify(this.remember));
   
  }
  onSubmit(form: NgForm){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(form.value.email=="" || form.value.email== undefined)
    {
      this.inValidLogin=true;
      this.message="Please enter your email id."
    }
    else if(!form.value.email.match(mailformat))
    {
      this.inValidLogin=true;
      this.message="Please enter a valid email id."
    }
    else if(form.value.password=="" || form.value.password== undefined)
    {
      this.inValidLogin=true;
      this.message="Please enter your password."
    }
    else{ 
      this.message="";
      this.inValidLogin=false;
      this.service.adminlogin(form.value).subscribe((res) => {
        this.validLogin=true;
        var status = res["response_code"];
        console.log(status)
        if(status==200){
          localStorage.setItem('loggedinAdminUser', JSON.stringify(res['response_body']));
          this.message="";
          this.router.navigateByUrl('dashboard');
        }else{
          this.validLogin=false;
          this.inValidLogin=true;
          this.message="Invalid username or password. Please try again."
        }
      })
    }
    
  }

  

  ForgotPassword(email)
  {
   
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat))
    {
      
    this.service.forgotPassword(email).subscribe((res) => {
      var status = res["response_code"];
     if(status==200){
        this.validForgotPassword=true;
        this.inValidForgotPassword=false;
        this.message1=res["response_message"];
     }
     else{
      this.validForgotPassword=false;
      this.inValidForgotPassword=true;
      this.message1="Email is is not registerd with us.";
     }
    })
    }
    else
    {
      this.inValidForgotPassword=true;
      this.message1="* Invalid email Address";
    }
  }

  SignUp()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = "100%";
    this.dialog.open(SignUpComponent)
  }

  modelOpen()
  {
    this.show=true;
  }

  openModal(){
    this.signUpData=new SignUp
    this.validForgotPassword=false;
    this.inValidForgotPassword=false;
    this.validSignUp=false;
    this.inValidSignUp=false;
    // const buttonModal = document.getElementById("openModalButton")
    // console.log('buttonModal', buttonModal)
    // buttonModal.click()
  }
 modelClose()
 {
  this.emailId='';
  this.validForgotPassword=false;
  this.inValidForgotPassword=false;
 }
 toggleVisibility1(e){
  this.visible=e.target.checked;
  console.log(this.visible);
    }

    submit(form: NgForm){
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(this.signUpData.first_name=="" || this.signUpData.first_name==undefined){
        this.inValidSignUp=true;
          this.message2="Please enter your first name.";
       }
       else if(this.signUpData.last_name=="" || this.signUpData.last_name==undefined){
        this.inValidSignUp=true;
          this.message2="Please enter your last name.";
       }
       else if(this.signUpData.email=="" || this.signUpData.email==undefined){
        this.inValidSignUp=true;
          this.message2="Please enter your email id.";
       }
       else if(!this.signUpData.email.match(mailformat)){
        this.inValidSignUp=true;
          this.message2="Please enter a valid email id.";
       }
       else if(this.signUpData.phone=="" || this.signUpData.phone==undefined){
        this.inValidSignUp=true;
          this.message2="Please enter your phone number.";
       }
       else if(this.signUpData.company_name=="" || this.signUpData.company_name==undefined){
        this.inValidSignUp=true;
          this.message2="Please enter your company name.";
       }
       else if(this.signUpData.city=="" || this.signUpData.city==undefined){
        this.inValidSignUp=true;
          this.message2="Please enter your city";
       }
       else if(this.signUpData.state_province=="" || this.signUpData.state_province==undefined){
        this.inValidSignUp=true;
          this.message2="Please enter your state";
       }
       else if(this.signUpData.postal_code=="" || this.signUpData.postal_code==undefined){
        this.inValidSignUp=true;
          this.message2="Please enter your zip/postalcode";
       }
       else{
        this.inValidSignUp=false;
        this.signUpData.country="india";
        this.service.signUpUser(this.signUpData).subscribe((res) => {
          var status = res["response_code"];
         if(status==200){
           this.validSignUp=true
          this.message2 = "Successfully submitted your request. Thank you";
         
         }
         else{
          
         }
        })
       }
     
    }
}
