import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminloginService } from '../services/Adminlogin.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Router } from '@angular/router';
import { SignUp} from '../models/signup-model';
import {ForgotPassword} from '../models/forgotpassword-model';
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
  forgotPassword:ForgotPassword=new ForgotPassword();
  emailId:string='';
  validForgotPassword:boolean=false;
  inValidForgotPassword:boolean=false;
  message1: string;
  inValidSignUp:boolean=false;
  validSignUp:boolean=false;
  inValidLogin:boolean=false;
  validLogin:boolean=false;
  message2: string;
  constructor(private router: Router,public service:AdminloginService,private dialog: MatDialog) { 
   
  }

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

  

  ForgotPassword(form2: NgForm)
  {
    console.log(form2.value.email);
    this.inValidForgotPassword=false;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(form2.value.email.match(mailformat))
    {
      this.service.forgotPassword(form2.value).subscribe((res) => {
      console.log(form2.value);
      var status = res["response_code"];
      console.log(res);
  
     if(status==200){
        this.validForgotPassword=true;
        this.message1=res["response_message"];
        this.resetForm1();
     
     }
     else
     {
      this.validForgotPassword=false;
      this.inValidForgotPassword=true;
      this.message1="*Email is not registered with us"
     }

})
    }
    else
    {
      this.resetForm1();
      this.validForgotPassword=false;
      this.inValidForgotPassword=true;
      this.message1="*Invalid email Address";
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
    this.resetForm();
    this.visible=false;
    this.signUpData=new SignUp
    this.forgotPassword=new ForgotPassword
    this.validForgotPassword=false;
    this.inValidForgotPassword=false;
    this.validSignUp=false;
    this.inValidSignUp=false;
   
    // const buttonModal = document.getElementById("openModalButton")
    // console.log('buttonModal', buttonModal)
    // buttonModal.click()
  }




  resetForm1(form2?: NgForm) {
    if (form2 = null)
      form2.resetForm();
    this.service.formData1 = {
      email:'',

      
}  
}

 modelClose()
 {
  this.resetForm();
  this.validForgotPassword=false;
  this.inValidForgotPassword=false;
 }
 toggleVisibility1(e){
  this.visible=e.target.checked;
  console.log(this.visible);
    }

    resetForm(form1?: NgForm) {
      if (form1 = null)
        form1.resetForm();
      this.service.formData2 = {
        first_name:'',
        last_name:'',
        email:'',
        company_name:'',
        company_id:null,
        address:'',
        city:'',
        state_province:'',
        postal_code:'',
        country:'',
        phone:'',
      
        
  }  
} 




    submit(form1: NgForm){
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(form1.value.first_name=="" || form1.value.first_name==undefined){
        this.inValidSignUp=true;
          this.message2="Please enter your first name.";
       }
       else if(form1.value.last_name=="" || form1.value.last_name==undefined){
        this.inValidSignUp=true;
          this.message2="Please enter your last name.";
       }
       else if(form1.value.email=="" || form1.value.email==undefined){
        this.inValidSignUp=true;
          this.message2="Please enter your email id.";
       }
       else if(!form1.value.email.match(mailformat)){
        this.inValidSignUp=true;
          this.message2="Please enter a valid email id.";
       }
       else if(form1.value.phone=="" || form1.value.phone==undefined){
        this.inValidSignUp=true;
          this.message2="Please enter your phone number.";
       }
       else if(form1.value.company_name=="" || form1.value.company_name==undefined){
        this.inValidSignUp=true;
          this.message2="Please enter your company name.";
       }
      //  else if(form1.value.company_id=="" || form1.value.company_id==undefined){
      //   this.inValidSignUp=true;
      //     this.message2="Please enter your company id.";
      //  }

       else if(form1.value.address=="" || form1.value.address==undefined){
        this.inValidSignUp=true;
          this.message2="Please enter your address";
       }

       else if(form1.value.city=="" || form1.value.city==undefined){
        this.inValidSignUp=true;
          this.message2="Please enter your city";
       }
       else if(form1.value.state_province=="" || form1.value.state_province==undefined){
        this.inValidSignUp=true;
          this.message2="Please enter your state";
       }
       else if(form1.value.postal_code=="" || form1.value.postal_code==undefined){
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
           this.resetForm();
         
         }
         else{
          
         }

        })
       }
     
    }

}
