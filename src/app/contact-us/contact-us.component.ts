import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import {ContactUsService} from '../services/contact-us.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  validDetails:boolean=false;
  invalidDetails:boolean=false;
  message:any;

  constructor(matIconRegistry: MatIconRegistry,public service:ContactUsService) { 
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    this.service.listen().subscribe((m:any)=>{
      
    })
  }

  ngOnInit(): void {
  }

  addRequest(form1: NgForm) {
    this.validDetails=false;
    console.log("working");
 
    if (form1.value.first_name == "" || form1.value.first_name == undefined) {
      this.invalidDetails = true;
      this.message = "Please enter first name";
      
    }
    else if (form1.value.last_name== "" || form1.value.last_name == undefined) {
      this.invalidDetails = true;
      this.message = "Please enter last name";
    }
    else if (form1.value.email == "" || form1.value.email == undefined) {
      this.invalidDetails  = true;
      this.message = "Please enter  email";
    }

    else if (form1.value.subject == "" || form1.value.subject == undefined) {
      this.invalidDetails  = true;
      this.message = "Please enter  subject";
    }
    else if (form1.value.comments == "" || form1.value.comments == undefined) {
      this.invalidDetails  = true;
      this.message = "Please enter comments";
    }
    
  
    else {
      console.log("work response");
      this.invalidDetails = false;
      this.service.addContactUs(form1.value).subscribe(data => {
        var status = data["response_code"];
        if (status == 200) {
          this.validDetails = true;
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
      subject:"",
      comments:""
    }

  }




}
