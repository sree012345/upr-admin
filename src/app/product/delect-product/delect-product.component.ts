import { Component, OnInit, Inject } from '@angular/core';
import { ProductDetailService } from 'src/app/services/product-detail.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-delect-product',
  templateUrl: './delect-product.component.html',
  styleUrls: ['./delect-product.component.css']
})
export class DelectProductComponent implements OnInit {
 product_id:number;
  constructor(public service:ProductDetailService, @Inject(MAT_DIALOG_DATA) public data: any,public dialogz:MatDialog) {
    this.product_id = this.data.product_id;
    console.log(this.product_id)
   }

  ngOnInit(): void {
  }
delete(){
this.service.deleteproduct(this.product_id).subscribe(data => {
  
  console.log(data);
  this.service.filter('Register click');

  
})
}
cancel(){
  this.dialogz.closeAll()
}
}
