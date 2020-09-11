import { Component, OnInit, ɵConsole } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductDetailService } from 'src/app/services/product-detail.service';
import { NgForm } from '@angular/forms';
import { PopupmessageComponent } from 'src/app/popupmessage/popupmessage.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(public dialog:MatDialog,public service:ProductDetailService) { }
message:string;
visible:boolean=false;
visit:boolean=false;
  ngOnInit(): void {
    this.resetForm();
  }
  cancel(){
    this.dialog.closeAll();
  }
  
  onsubmit(form:NgForm){
   
  
  }
toggleVisibility(e){
this.visible=e.target.checked;
console.log(this.visible);
  }
  toggleVisibility1(e){
    this.visit=e.target.checked;
    console.log(this.visible);
      }
  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.service.formData = {
      is_upc_code:false,
      is_serial_number_active:false,
      product_reference_number:'',
      product_id:null,
      product_name:"",
      company_id:null,
      content_management_req:false,
      counterfeit_radius:null,
      forms_req:false,
      activation_req:false,
      counterfeit_req:false,
      recall_req:false
      
}  
  }
}