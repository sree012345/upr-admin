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
import { NgForm } from '@angular/forms';
import { adminAdduser } from '../models/adminAdduser-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  listData: MatTableDataSource<any>
  product_name:any;
  visible:boolean=false;
  visit:boolean=false;
  validAddProduct:boolean=false;
  inValidAddProduct:boolean=false;
  validUpdateProduct:boolean=false;
  inValidUpdateProduct:boolean=false;
  product_id:any;
  message:string;
  message1:string;
  displayedColumns = ['product_name', 'ref_no',"counterfeit_radius","Counterfeit",'content_management_required','recall_required',"Forms",'Options'];
  adminUserDetails:adminAdduser;  
  logedin=localStorage.getItem('loggedinAdminUser');
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
    this.adminUserDetails=JSON.parse(this.logedin|| '{}');
    this.adminUserDetails.company_id= this.adminUserDetails.company_id;
    this.loadProduct();
  }
  loadProduct() {
    this.service.product(this.adminUserDetails.company_id).subscribe(data => {
     console.log(data);
     this.listData = new MatTableDataSource(data["response_body"]["products_details"]);
     this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });

  }
  applyFilter(filtervalue : string){
    this.listData.filter = filtervalue.trim().toLocaleLowerCase();
  }
  addproduct(form1:NgForm)
  {
    this.validAddProduct=false;
    if(form1.value.product_name=="" || form1.value.product_name==undefined)
    {
      this.inValidAddProduct=true;
      this.message="Please enter item name.";
    }
    else if(form1.value.is_upc_code==true && (form1.value.product_reference_number=="" || form1.value.product_reference_number==undefined))
    {
      this.inValidAddProduct=true;
      this.message="Please enter upc code.";
    }
    else if(form1.value.counterfeit_req==true && (form1.value.counterfeit_radius=="" || form1.value.counterfeit_radius==undefined))
    {
      this.inValidAddProduct=true;
      this.message="Please enter counterfeit radius.";
    }
    else {      
      this.inValidAddProduct=false;
      this.service.addproduct(form1.value,this.adminUserDetails.company_id).subscribe(data => {
        var status = data["response_code"];
            console.log(status)
            if(status==200){
              this.validAddProduct=true;
              this.message=data["response_message"];
              this.service.filter('Register click');
              this.resetForm();
            }        
    })
   }
  }
  updateproduct(pro:product,product_id)
  {
    this.service.formData = pro;
    console.log(pro)
    this.product_id=product_id;
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.autoFocus = false;
    // dialogConfig.width = "100%";
    // this.dialog.open(UpdateProductComponent,{
    //   data:{
    //     product_id:this.product_id
    //   }
    // });
    
  }

  UpdateProduct(form:NgForm)
  {
    this.service.updateproduct(form.value,this.product_id).subscribe(data => {
  
      var status = data["response_code"];
            console.log(status)
            if(status==200){
              this.validUpdateProduct=true;
              this.message1=data["response_message"];
              this.service.filter('Register click');
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
  openModal(){
    this.validAddProduct=false;
    this.inValidAddProduct=false;
    this.resetForm();
  } 
  CloseModel()
  {
    this.service.filter('Register click');
  }
  }

