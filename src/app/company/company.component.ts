import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../services/company.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  validAddCompany:boolean=false;
  inValidAddCompany:boolean=false;
  message:string;
  companyList:any;

  constructor(public service:CompanyService) { }

  ngOnInit(): void {
  }

  addCompany(form1: NgForm) {
    this. validAddCompany=false;
    console.log("working");
 
    if (form1.value.company_name == "" || form1.value.company_name == undefined) {
      this.inValidAddCompany = true;
      this.message = "Please enter company name";
      
    }

    else if (form1.value.company_type== "" || form1.value.company_type== undefined) {
      this.inValidAddCompany = true;
      this.message = "Please enter company type";
      
    }
  
    else if (form1.value.company_address== "" || form1.value.company_address== undefined) {
      this.inValidAddCompany = true;
      this.message = "Please enter company address";
      
    }
    else if (form1.value.company_city== "" || form1.value.company_city== undefined) {
      this.inValidAddCompany = true;
      this.message = "Please enter company city";
      
    }
    else if (form1.value.company_state_province== "" || form1.value.company_state_province== undefined) {
      this.inValidAddCompany = true;
      this.message = "Please enter company state province";
      
    }
    else if (form1.value.company_postal_code== "" || form1.value.company_postal_code== undefined) {
      this.inValidAddCompany = true;
      this.message = "Please enter company postal code";
      
    }
    else if (form1.value. company_country== "" || form1.value. company_country== undefined) {
      this.inValidAddCompany = true;
      this.message = "Please enter company country";
      
    }
    else if (form1.value.company_website== "" || form1.value.company_website== undefined) {
      this.inValidAddCompany = true;
      this.message = "Please enter company website";
      
    }
   else if (form1.value.company_phone== "" || form1.value.company_phone== undefined) {
      this.inValidAddCompany = true;
      this.message = "Please enter company phone";
      
    }
   
  
    else {
      console.log("work response");
      this.inValidAddCompany = false;
      this.service.addCompanyDetails(form1.value).subscribe(data => {
        var status = data["response_code"];
        if (status == 200) {
          this.validAddCompany = true;
          this.companyList= data(["response_body"]);
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
      company_name: "",
      company_address:"",
      company_city:"",
      company_state_province:"",
      company_postal_code:"",
      company_country:"",
      company_phone:"",
      company_website:"",
      company_type:""
     }

  }

}
