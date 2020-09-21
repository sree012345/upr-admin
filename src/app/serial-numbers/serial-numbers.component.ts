import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SerialNumberService } from '../services/serial-number.service';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AddSerialNumberComponent } from './add-serial-number/add-serial-number.component';
import { UpdateSerialNumberComponent } from './update-serial-number/update-serial-number.component';
import { DeleteSerialNumberComponent } from './delete-serial-number/delete-serial-number.component';
import { NgForm } from '@angular/forms';
import { addSerialNumber } from '../models/serialNumber-model';
import { adminAdduser } from '../models/adminAdduser-model';

@Component({
  selector: 'app-serial-numbers',
  templateUrl: './serial-numbers.component.html',
  styleUrls: ['./serial-numbers.component.css']
})
export class SerialNumbersComponent implements OnInit {
  inValidAddSerialNumber:boolean=false;
  validAddSerialNumber:boolean=false;
  productId:number=0;
  serialNumber:string='';
  addSerialNumers:addSerialNumber=new addSerialNumber();
  
  listData: MatTableDataSource<any>
  displayedColumns = ['product_name', 'serial_number'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  productlist: any;
  message: string;
  adminUserDetails:adminAdduser;  
  logedin=localStorage.getItem('loggedinAdminUser');
  constructor(private router: Router, public service: SerialNumberService,private dialog: MatDialog) {
    this.service.listen().subscribe((m:any) =>{
      console.log(m);
      this.loadserialNumberlist();
   })
   }

  ngOnInit() {
    this.adminUserDetails=JSON.parse(this.logedin|| '{}');
    this.adminUserDetails.company_id= this.adminUserDetails.company_id;
    this.loadserialNumberlist();
    this.service.get_productlist(this.adminUserDetails.company_id).subscribe(data => {
      this.productlist = (data["response_body"]["products_details"]);
    });
  }
  loadserialNumberlist() {
    this.service.getSerialNumber(this.adminUserDetails.company_id).subscribe(data => {
     console.log(data);
     this.listData = new MatTableDataSource(data["response_body"]["serial_number"]);
     // this.listData.sort = this.sort;
      //this.listData.paginator = this.paginator;
    });

  }
  applyFilter(filtervalue : string){
    this.listData.filter = filtervalue.trim().toLocaleLowerCase();
  }
  applyFilter1(filtervalue : string){
    this.listData.filter = filtervalue.trim().toLocaleLowerCase();
  }
  addSerialNumber(form1:NgForm)
 
  {
  
    this.validAddSerialNumber=false;
    
    if(form1.value.product_id=="" || form1.value.product_id==undefined)
    {
      this.inValidAddSerialNumber=true;
      this.message="Please select product";
    }
    else if(form1.value.serial_number=="" || form1.value.serial_number==undefined)
    {
      this.inValidAddSerialNumber=true;
      this.message="Please enter serial number";
    }
    else
    {
    this.inValidAddSerialNumber=false;
    this.addSerialNumers=new addSerialNumber();
    this.addSerialNumers.product_id=Number(form1.value.product_id);
    this.addSerialNumers.serial_number=form1.value.serial_number;
    this.service.addSerialNumber(this.addSerialNumers).subscribe(data => {
      console.log(data);
      var status=data["response_code"];
      if(status==200)
      {
        this.validAddSerialNumber=true;
        this.message=data["response_message"]
        this.service.filter('Register click');
        this.resetForm();
      
      }
      
      
    });
  }
  }
  addSerialButtonClicked()
  {
    console.log("serial");
    this.resetForm();
    this.validAddSerialNumber=false;
    this.inValidAddSerialNumber=false;


    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.autoFocus = false;
    // dialogConfig.width = "100%";
    // this.dialog.open(AddSerialNumberComponent);
  }
  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.service.formData = {
      serial_number:"",
      product_id:null
    }

  }
  CloseModel() {
   this.resetForm();
    this.service.filter('Register click');
    
  }
  updateSerialButtonClicked()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = "100%";
    this.dialog.open(UpdateSerialNumberComponent);
  }

  DeleteProduct(serial_number_id)
  {
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = "100%";
    this.dialog.open(DeleteSerialNumberComponent,{
      width:"30%",
      data:{
        serial_id:serial_number_id
      }
    })
  }


  
}
