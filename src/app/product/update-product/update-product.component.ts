import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductDetailService } from 'src/app/services/product-detail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
product_name:any;
  constructor(public dialog:MatDialog, @Inject(MAT_DIALOG_DATA) public data: any,public service:ProductDetailService) { 
    // this.product_name = this.data.product_name;
    // console.log( this.product_name)
  }
  cancel(){
    this.dialog.closeAll();
  }
  ngOnInit(): void {
  }
  onsubmit(form:NgForm){
    this.service.updateproduct(form.value).subscribe(data => {
  
      console.log(data);
      this.service.filter('Register click');
    this.dialog.closeAll()
      
    })
  }

}
