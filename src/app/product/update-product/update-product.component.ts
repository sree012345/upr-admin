import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { ProductDetailService } from 'src/app/services/product-detail.service';
import { NgForm } from '@angular/forms';
import { PopupmessageComponent } from 'src/app/popupmessage/popupmessage.component';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
product_id:any;
message:string;
visible:boolean=false;
visit:boolean=false;
  constructor(public dialog:MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,public service:ProductDetailService) { 
    if(this.service.formData.counterfeit_req==true){
     console.log(this.service.formData.counterfeit_req)
     this.visit=true;
    }
    this.product_id= this.data.product_id;
    console.log( this.product_id)
  }
  cancel(){
    this.dialog.closeAll();
  }
  ngOnInit(): void {
  }
  onsubmit(form:NgForm){
    this.service.updateproduct(form.value,this.product_id).subscribe(data => {
  
      console.log(data);
      this.service.filter('Register click');
    this.dialog.closeAll()
    var status = data["response_code"];
    console.log(status)
    if(status==200){
console.log(data);
this.service.filter('Register click');
this.dialog.closeAll()
this.message = "Product Updated Successfully";
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
toggleVisibility(e){
  this.visible=e.target.checked;
  console.log(this.visible);
    }
    toggleVisibility1(e){
      this.visit=e.target.checked;
      console.log(this.visible);
        }
 
}
