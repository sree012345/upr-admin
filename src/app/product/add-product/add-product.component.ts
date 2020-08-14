import { Component, OnInit, ɵConsole } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailService } from 'src/app/services/product-detail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(public dialog:MatDialog,public service:ProductDetailService) { }

  ngOnInit(): void {
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
  
  console.log(data);
  this.service.filter('Register click');
this.dialog.closeAll()
  
})
  }
}
}
