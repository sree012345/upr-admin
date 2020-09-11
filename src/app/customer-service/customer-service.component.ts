import { Component, OnInit } from '@angular/core';
import {CustomerServiceService} from '../services/customer-service.service';
import {customerService} from '../models/customerService-model';
import { NgForm } from '@angular/forms';
import { adminAdduser } from '../models/adminAdduser-model';

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.css']
})
export class CustomerServiceComponent implements OnInit {
  customerlist:any;
  validAddCustomer:boolean=false;
  invalidAddCustomer:boolean=false;
  message:any;
  productdetails:any;
  productrecalldetails:any;
  productbulletindetails:any;
  adminUserDetails:adminAdduser;  
  logedin=localStorage.getItem('loggedinAdminUser');
  constructor(public service:CustomerServiceService) { }

  ngOnInit(): void {
    this.adminUserDetails=JSON.parse(this.logedin|| '{}');
    this.adminUserDetails.company_id= this.adminUserDetails.company_id;
      this.service.get_productlist(this.adminUserDetails.company_id).subscribe(data => {
      this.customerlist = (data["response_body"]["products_details"]);
    });
  }

  addCustomer(form1: NgForm) {
    this.validAddCustomer=false;
 
    if (form1.value.company_id == "" || form1.value.company_id == undefined) {
      this.invalidAddCustomer= true;
      this.message = "Please select company.";
    }
    else if (form1.value.product_id == "" || form1.value.product_id == undefined) {
      this.invalidAddCustomer = true;
      this.message = "Please select product";
    }
    else if (form1.value.serial_number == "" || form1.value.serial_number == undefined) {
      this.invalidAddCustomer = true;
      this.message = "Please enter  serial number";
    }

    else {
      console.log("working response");
      this.invalidAddCustomer= false;
      this.service.addcustomerservice(form1.value).subscribe(data => {
        var status = data["response_code"];
        if (status == 200) {
          this.validAddCustomer = true;
          this.message = data["response_message"];
          this.service.filter('Register click');
          this.resetForm();
        }

        this.productdetails=(data ["response_body"]["product_details"]);
        this.productrecalldetails=(data ["response_body"]["product_recall_details"])
        this. productbulletindetails=(data ["response_body"]["product_recall_details"])
      })
    }
  }

  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.service.formData = {
      company_id: null,
      product_id:null,
      serial_number:""

  }

}

CloseModel() {
  this.service.filter('Register click');
  this.resetForm();
}

}