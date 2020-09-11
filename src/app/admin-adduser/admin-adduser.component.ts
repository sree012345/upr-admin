import { Component, OnInit } from '@angular/core';
import {AdminAdduserService} from '../services/admin-adduser.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-adduser',
  templateUrl: './admin-adduser.component.html',
  styleUrls: ['./admin-adduser.component.css']
})
export class AdminAdduserComponent implements OnInit {
  validAddUser:boolean=false;
  invalidAdduser:boolean=false;
  message:any;
  message1:any;
  invalidAdduser1:boolean=false;

  constructor(public service:AdminAdduserService) { }

  ngOnInit(): void {
  }

  addCompany(form1: NgForm) {
    this.validAddUser=false;
    console.log("working");
 
    if (form1.value.first_name == "" || form1.value.first_name == undefined) {
      this. invalidAdduser = true;
      this.message = "Please enter First Name";
      
    }

    else if (form1.value.last_name== "" || form1.value.last_name== undefined) {
      this. invalidAdduser = true;
      this.message = "Please enter Last Name";
      
    }
  
    else if (form1.value.email== "" || form1.value.email== undefined) {
      this. invalidAdduser = true;
      this.message = "Please enter Email";
      
    }
    else if (form1.value.phone== "" || form1.value.phone== undefined) {
      this. invalidAdduser = true;
      this.message = "Please enter Phone";
      
    }
    else if (form1.value.company_name== "" || form1.value.company_name== undefined) {
      this. invalidAdduser = true;
      this.message = "Please enter Company Name";
      
    }
    else if (form1.value.address== "" || form1.value.address== undefined) {
      this. invalidAdduser = true;
      this.message = "Please enter Address";
      
    }
    else if (form1.value. city== "" || form1.value. city== undefined) {
      this. invalidAdduser = true;
      this.message = "Please enter City";
      
    }
    else if (form1.value.state_province== "" || form1.value.state_province== undefined) {
      this. invalidAdduser = true;
      this.message = "Please enter State Province";
      
    }
   else if (form1.value.postal_code== "" || form1.value.postal_code== undefined) {
      this. invalidAdduser = true;
      this.message = "Please enter Postal Code";
    }
    else if (form1.value.country== "" || form1.value.country== undefined) {
      this. invalidAdduser = true;
      this.message = "Please enter Country";
    }
    else if (form1.value.user_role== "" || form1.value.user_role== undefined) {
      this. invalidAdduser = true;
      this.message = "Please enter User Role";
    }
    
   
  
    else {
      console.log("work response");
      this.invalidAdduser = false;
      this.service. addAdmiuser(form1.value).subscribe(data => {
        var status = data["response_code"];
        if (status == 200) {
          this.validAddUser = true;
          this.invalidAdduser=false;
          this.message = data["response_message"];
          this.service.filter('Register click');
          this.resetForm();
        }
        else (status == 201)
        console.log("201");
        {
          this.invalidAdduser=true;
          this.validAddUser=false;
          this.message = data["response_message"];
          this.service.filter('Register click');
          this.resetForm();

        }
      })
    }
  }

  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.service.formData = {
      first_name: "",
      last_name:"",
      email:"",
      company_name:"",
      company_id:null,
      address:"",
      city:"",
      state_province:"",
      postal_code:"",
      country:"",
      phone:"",
      user_role:null,
      is_active:null
    }

  }

}
