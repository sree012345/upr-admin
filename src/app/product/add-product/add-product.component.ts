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
    if(form.invalid==true){
     console.log(form.invalid)
    }
   else if(form.invalid==false){
this.service.addproduct(form.value).subscribe(data => {
  var status = data["response_code"];
      console.log(status)
      if(status==200){
  console.log(data);
  this.service.filter('Register click');
this.dialog.closeAll()
this.message = "Product Added successfully";
const dialogConfig = new MatDialogConfig();
dialogConfig.autoFocus = false;
dialogConfig.width = "100%";

this.dialog.open(PopupmessageComponent, {
  data: {
    message: this.message,
      }
      
    })
  }
  
   })
  }
  
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
      product_description:"",
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