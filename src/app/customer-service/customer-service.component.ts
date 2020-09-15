import { Component, OnInit } from '@angular/core';
import {CustomerServiceService} from '../services/customer-service.service';
import {customerService, ProductInfo} from '../models/customerService-model';
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
  companyName:string;
  companyId:number;  
  SectionsDisplay:boolean=false;
  productInfoDetails:ProductInfo=new ProductInfo();
  adminUserDetails:adminAdduser;  
  logedin=localStorage.getItem('loggedinAdminUser');
  productinformationdetails: any;
  infoMessage: string;
  recallMessage: string;
  bulletinMessage: string;
  is_registerd: boolean;
  SectionsDisplay1: boolean;
  constructor(public service:CustomerServiceService) { }

  ngOnInit(): void {
    this.SectionsDisplay=false;
    this.adminUserDetails=JSON.parse(this.logedin|| '{}');
    this.adminUserDetails.company_id= this.adminUserDetails.company_id;
    this.companyId= this.adminUserDetails.company_id;
    this.companyName=this.adminUserDetails.company_name;
      this.service.get_productlist(this.adminUserDetails.company_id).subscribe(data => {
      this.customerlist = (data["response_body"]["products_details"]);
    });
  }

  addCustomer(form1: NgForm) {
    this.validAddCustomer=false;
    this.SectionsDisplay=false;
    this.SectionsDisplay1=false; 
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
        console.log(data)
        var status = data["response_code"];
        if (status == 200) {
          this.validAddCustomer = true;
        this.productInfoDetails=(data ["response_body"]["product_details"]);
        this.is_registerd= this.productInfoDetails.is_registerd;
        if(this.is_registerd!=false)
        {
        this.productrecalldetails=(data ["response_body"]["product_recall_details"])
        this. productbulletindetails=(data ["response_body"]["product_builtin_details"])
        this. productinformationdetails=(data ["response_body"]["product_information"])
        if(this.productinformationdetails.length==0)
        {
          this.infoMessage="There are currently no information for this product"
        }
        else{
          this.infoMessage="The following important documents and links have been provided by"+this.productInfoDetails.company_name;
        }
        if(this.productrecalldetails.length==0)
        {
          this.recallMessage="There are currently no recalls for this product"
        }
        else{
          this.recallMessage="There are " +this.productrecalldetails.length+ " different recalls issued on this product,however the serial number provided is not among the ones that have been recalled";
        }
        if(this.productbulletindetails.length==0)
        {
          this.bulletinMessage="There are currently no service bulletins for this product."
        }
        else{
          this.bulletinMessage="There are " +this.productbulletindetails.length+ " different service bullitin issued on this product";
        }
        this.SectionsDisplay1=true;  
        }
         this.SectionsDisplay=true;  
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