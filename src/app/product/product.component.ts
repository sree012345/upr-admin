import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { login } from '../models/Login-model';
import { ProductDetailService  } from '../services/product-detail.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DelectProductComponent } from './delect-product/delect-product.component';
import { product } from '../models/Product-model';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  listData: MatTableDataSource<any>
  product_name:any;
  product_id:any;
  displayedColumns = ['product_name', 'ref_no',"counterfeit_radius","Counterfeit",'content_management_required','recall_required',"Forms",'Options'];

  constructor(matIconRegistry: MatIconRegistry,public service:ProductDetailService,private dialog: MatDialog ) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    this.service.listen().subscribe((m:any) =>{
      console.log(m);
      this.loadProduct();
   })

   }
  @ViewChild(MatSort, { static:false }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ngOnInit(): void {
    this.loadProduct();
  }
  loadProduct() {
    this.service.product().subscribe(data => {
     console.log(data);
     this.listData = new MatTableDataSource(data["response_body"]["products_details"]);
     this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });

  }
  applyFilter(filtervalue : string){
    this.listData.filter = filtervalue.trim().toLocaleLowerCase();
  }
  addproduct()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = "100%";
    this.dialog.open(AddProductComponent,{
      
    });
  }
  updateproduct(pro:product,product_id)
  {
    this.service.formData = pro;
    console.log(pro)
  this.product_id=product_id

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = "100%";
    this.dialog.open(UpdateProductComponent,{
      data:{
        product_id:this.product_id
      }
    });
    
  }
  DeleteProduct(product_id)
  {
this.product_id=product_id;

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = "100%";
    this.dialog.open(DelectProductComponent,{
      width:"30%",
      data:{
        product_id:this.product_id
      }
    })
  }
    
    
  }

