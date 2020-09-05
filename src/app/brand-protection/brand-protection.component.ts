import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {BrandProtectionService} from '../services/brand-protection.service';
import { MatIconRegistry } from '@angular/material/icon';
import { NgForm } from '@angular/forms';
import {addBrandProtection} from '../models/brandProtection-model';

@Component({
  selector: 'app-brand-protection',
  templateUrl: './brand-protection.component.html',
  styleUrls: ['./brand-protection.component.css']
})
export class BrandProtectionComponent implements OnInit {
  brandDetails:any;
  brandllist:any;
  message:string;
  message1:string;
  brand_id:any;
  validAddBrand:boolean=false;
  inValidAddBrand:boolean=false;
  validUpdateBrand:boolean=false;
  invalidUpdateBrand:boolean=false;
  visit:boolean=false;
  visible:boolean=false;

  listData: MatTableDataSource<any>
  displayedColumns = ['product_name', 'location_detection', 'radius_in_miles', 'edit',];

  constructor(matIconRegistry: MatIconRegistry,public service:BrandProtectionService) { 
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    this.service.listen().subscribe((m: any) => {
      this.loadbrandList();
    })
  }

  ngOnInit(): void {
    this.loadbrandList();
    this.service.get_productlist().subscribe(data => {
      this.brandllist = (data["response_body"]["products_details"]);
    });
  }

  loadbrandList() {
    this.service.brandList().subscribe(data => {
      this.listData = new MatTableDataSource(data["response_body"]["get_Brand_Details"]);
      this.brandDetails = data["response_body"]["get_Brand_Details"];
    });
  }

  addBrand(form1: NgForm) {
    this.validAddBrand=false;
    console.log("working");
 
    if (form1.value.product_id == "" || form1.value.product_id == undefined) {
      this.inValidAddBrand = true;
      this.message = "Please enter item.";
      
    }
  
    else if (form1.value.location_detection==true && (form1.value.radius_in_miles=="" || form1.value.radius_in_miles==undefined)) {
      this.inValidAddBrand = true;
      this.message = "Please enter  radius in miles";
    }
   
  
    else {
      console.log("work response");
      this.inValidAddBrand = false;
      this.service.addbrandDetails(form1.value).subscribe(data => {
        var status = data["response_code"];
        if (status == 200) {
          this.validAddBrand = true;
          this.message = data["response_message"];
          this.service.filter('Register click');
          this.resetForm();
        }
      })
    }
  }

  updateBrand(pro: addBrandProtection, brand_id) {
    console.log("updatebrand");
    console.log(brand_id);
    this.validUpdateBrand=false;
    this.invalidUpdateBrand=false;
    this.service.formData = pro;
    this.service.formData.location_detection = Boolean(pro.location_detection)
    this.service.formData.radius_in_miles = pro.radius_in_miles
    this.brand_id = brand_id;
  }

  brandUpdate(form: NgForm) {
    this.service.updatebrand(form.value, this.brand_id).subscribe(data => {
     var status = data["response_code"];
      console.log(status)
      if (status == 200) {
        this.validUpdateBrand = true;
        this.message1 = data["response_message"];
        this.service.filter('Register click');
      }

    });
  }

toggleVisibility1(e){
this.visit=e.target.checked;
console.log(this.visit);
}

toggleVisibility2(e){
  this.visible=e.target.checked;
  console.log(this.visible);
  } 

 

  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.service.formData = {
      brand_id: null,
      product_id: null,
      location_detection:null,
      radius_in_miles:null
    }

  }

  CloseModel() {
    this.service.filter('Register click');
    this.resetForm();
  }

  openBrand(){
    this.resetForm();
    this.validAddBrand=false;
    this.inValidAddBrand=false;
  }

}
