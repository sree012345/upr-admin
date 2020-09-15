import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../services/company.service';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { company } from '../models/company-model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  SERVER_URL = "http://34.204.86.142:3002/uprserver/api/v1/admin/logo_Upload";  
  validAddCompany:boolean=false;
  inValidAddCompany:boolean=false;
  message:string;
  companyList:any;
  uploadForm: FormGroup; 
  profile:any;
  filename: string = null;

  constructor(public service:CompanyService,private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  uploadedFile(event) {     
    if (event.target.files.length > 0) {
      const file_data = event.target.files[0];
      this.uploadForm.get('logoImage').setValue(file_data);
      this.profile=event.target.files;
      console.log(this.profile);
      this.filename = event.target.files[0].name;
      console.log(this.filename);
    } 
  }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      logoImage: ['']
    });
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
    else if (this.uploadForm.get('logoImage').value== "" || this.uploadForm.get('logoImage').value== undefined) {
      this.inValidAddCompany = true;
      this.message = "Please select your comapany logo";      
    }
    else {
      this.inValidAddCompany = false;
      const formData = new FormData();
      formData.append('logoimage', this.uploadForm.get('logoImage').value);
      this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(data =>
        {           
          var status = data["response_code"];
         if(status==200){ 
          console.log("work response");
          var logourl=data["response_body"]["logo_url"];
          this.inValidAddCompany = false;
          this.service.addCompanyDetails(form1.value,logourl).subscribe(data => {
            var status = data["response_code"];
            if (status == 200) {
              this.validAddCompany = true;
              this.message = data["response_message"];
              this.service.filter('Register click');
              this.resetForm();
            }
          })         
        }
        else{
          console.log("not working");
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
      logo_url:"",
      company_state_province:"",
      company_postal_code:"",
      company_country:"",
      company_phone:"",
      company_website:"",
      company_type:"",
      is_active:null
     }

  }

}
