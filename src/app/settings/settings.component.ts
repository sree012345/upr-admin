import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ChangePassword, EditProfile } from '../models/settings_model';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  inValidChangePassword:boolean=false;
  validChangePassword:boolean=false;
  Auth:string;
  ConFirmPswd:string;
  profileDetails:EditProfile= new EditProfile(); 
  chngePasswrd:ChangePassword= new ChangePassword();
  logedin=localStorage.getItem('loggedinAdminUser');
  loginDetails: any;
  message: any;
  constructor(public service: SettingsService) { }

  ngOnInit(): void {
    this.loginDetails=JSON.parse(this.logedin|| '{}');
    this.profileDetails.first_name=this.loginDetails.first_name;
    this.profileDetails.last_name=this.loginDetails.last_name;
    this.profileDetails.email=this.loginDetails.email;
    this.profileDetails.address=this.loginDetails.address;
    this.profileDetails.city=this.loginDetails.city;
    this.profileDetails.state_province=this.loginDetails.state_province;
    this.profileDetails.country=this.loginDetails.country;
    this.profileDetails.postal_code=this.loginDetails.postal_code;
    this.profileDetails.phone=this.loginDetails.phone;
  }
  editProfile(form: NgForm)
  {
    this.profileDetails=new EditProfile();
    this.profileDetails.user_id=Number(this.loginDetails.admin_user_id)
    this.profileDetails.first_name=form.value.first_name;
    this.profileDetails.last_name=form.value.last_name;
    this.profileDetails.email=form.value.email;
    this.profileDetails.address=form.value.address;
    this.profileDetails.city=form.value.city;
    this.profileDetails.state_province=form.value.state_province;
    this.profileDetails.country=form.value.country;
    this.profileDetails.postal_code=form.value.postal_code;
    this.profileDetails.phone=form.value.phone;
    this.service.editProfile(this.profileDetails).subscribe(data => {
      var status = data["response_code"];
      if (status == 200) {
        this.message ="User profile updated successfully";
      }
    })
  }

  changePassword(form1: NgForm)
  {
    this.inValidChangePassword=false;
      this.validChangePassword=false;
    if (form1.value.oldpassword == "" || form1.value.oldpassword == undefined) {
      this.inValidChangePassword = true;
      this.message = "Please enter current password.";
    }
    else if (form1.value.newpassword == "" || form1.value.newpassword == undefined) {
      this.inValidChangePassword = true;
      this.message = "Please enter new password.";
    }
    else if (form1.value.confirmpswd == "" || form1.value.confirmpswd == undefined) {
      this.inValidChangePassword = true;
      this.message = "Please enter confirm password.";
    }
    else if (form1.value.newpassword !=form1.value.confirmpswd) {
      this.inValidChangePassword = true;
      this.message = "password and confirm passwor is not match";
    }
    else
    {
      this.inValidChangePassword=false;
      this.chngePasswrd=new ChangePassword();
      this.chngePasswrd.user_id=Number(this.loginDetails.admin_user_id);
      this.chngePasswrd.oldpassword=form1.value.oldpassword;
      this.chngePasswrd.newpassword=form1.value.newpassword;
      this.service.changePassword(this.chngePasswrd).subscribe(data => {
        var status = data["response_code"];
        if (status == 200) {
          this.resetForm()
         this.ConFirmPswd="";
          this.inValidChangePassword=false;
          this.validChangePassword=true;
          this.message ="Password chnaged successfully";
        }
        else{
          this.inValidChangePassword=true;
          this.validChangePassword=false;
          this.message ="please enter the correct password";

        }
      })
    }
  }

  resetForm(form1?: NgForm) {
    if (form1 = null)
      form1.resetForm();
    this.chngePasswrd = {
      oldpassword: "",
      newpassword: "",
      user_id: null
    }

  }

  manageSettings(form2?: NgForm)
  {
    console.log(form2.value)

  }
}
