import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceBulletinService } from '../services/service-bulletin.service';
import * as moment from 'moment';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceBulletin } from '../models/serviceBulletin-model';
import { NgForm } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { adminAdduser } from '../models/adminAdduser-model';


@Component({
  selector: 'app-service-bulletin',
  templateUrl: './service-bulletin.component.html',
  styleUrls: ['./service-bulletin.component.css']
})
export class ServiceBulletinComponent implements OnInit {
  productist: any;
  listData: MatTableDataSource<any>
  displayedColumns = ['product_name','title', 'begin_date', 'end_date', 'first_sn', 'last_sn', 'bulletin_message', 'edit', 'delete'];
  inValidbulletin:boolean=false;
  validBulletin:boolean=false;
  inValidUpdatebulletin:boolean=false;
  validUpdateBulletin:boolean=false;

  bulletinDetails: any;
  message: any;
  bulletin_id: any;
  message1: any;
  message2: any;
  inValidDeletebulletin: boolean=false;
  validDeleteBulletin: boolean=false;
  adminUserDetails:adminAdduser;  
  logedin=localStorage.getItem('loggedinAdminUser');
  
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(public service: ServiceBulletinService) {
    this.service.listen().subscribe((m: any) => {
      this.loadBulletinList();
    })
   }

  ngOnInit(): void {
    this.adminUserDetails=JSON.parse(this.logedin|| '{}');
    this.adminUserDetails.company_id= this.adminUserDetails.company_id;
    this.loadBulletinList();
    this.service.get_productlist(this.adminUserDetails.company_id).subscribe(data => {
    this.productist = (data["response_body"]["products_details"]);
    });
  }
  loadBulletinList() {
    this.service.serviceBulletinList(this.adminUserDetails.company_id).subscribe(data => {
      this.listData = new MatTableDataSource(data["response_body"]["service_bulletin_details"]);
      this.listData.sort = this.sort;
      this.bulletinDetails = data["response_body"]["service_bulletin_details"];
      console.log(this.bulletinDetails)
      this.bulletinDetails.forEach(element => {
        if (element.begin_date != null) {
          let MailedDate = moment.utc(element.begin_date).format("MM-DD-YYYY");
          element.begin_date = MailedDate;
        }
        if (element.end_date != null) {
          let LastAppealDate = moment.utc(element.end_date).format("MM-DD-YYYY");
          element.end_date = LastAppealDate;
        }
      });
    });
  }
  applyFilter1(filtervalue: string) {
    this.listData.filter = filtervalue.trim().toLocaleLowerCase();
  }

  updateBulletin(pro: ServiceBulletin, bulletin_id)
  {
    this.validBulletin=false;
    this.inValidUpdatebulletin=false;
    this.validUpdateBulletin=false;
    this.inValidbulletin=false;
    this.service.formData = pro;
    this.service.formData.begin_date = new Date(pro.begin_date)
    this.service.formData.end_date = new Date(pro.end_date)
    this.bulletin_id = bulletin_id;
  }
 UpdateBulletinSubmit(form: NgForm) {
    this.service.updatebulletin(form.value, this.bulletin_id).subscribe(data => {

      var status = data["response_code"];
      console.log(status)
      if (status == 200) {
        this.validUpdateBulletin = true;
        this.message1 = data["response_message"];
        this.service.filter('Register click');
      }

    });
  }

  deleteBulletin(id)
  {
    this.bulletin_id = id;
    this.inValidDeletebulletin=false;
    this.validDeleteBulletin=false
  }
  bulletinDeleteSubmit()
  {
    this.service.deletebulletin(this.bulletin_id).subscribe(data => {
      var status = data["response_code"];
      console.log(status)
      if (status == 200) {
        this.validDeleteBulletin = true;
        this.message2 = data["response_message"];
        this.service.filter('Register click');
      }
    });
  }
  addBulletin(form1: NgForm)
  {
    this.validBulletin=false;

    if (form1.value.product_id == "" || form1.value.product_id == undefined) {
      this.inValidbulletin = true;
      this.message = "Please select item.";
    }
    else if (form1.value.title == "" || form1.value.title == undefined) {
      this.inValidbulletin = true;
      this.message = "Please enter bulletin title.";
    }
    else if (form1.value.begin_date == "" || form1.value.begin_date == undefined) {
      this.inValidbulletin = true;
      this.message = "Please enter  begin date.";
    }
    else if (form1.value.end_date == "" || form1.value.end_date == undefined) {
      this.inValidbulletin = true;
      this.message = "Please enter end date.";
    }
    else if (form1.value.first_SN == "" || form1.value.first_SN == undefined) {
      this.inValidbulletin = true;
      this.message = "Please enter first serial number.";
    }
    else if (form1.value.last_SN == "" || form1.value.last_SN == undefined) {
      this.inValidbulletin = true;
      this.message = "Please enter last serial number.";
    }
    else if (form1.value.service_bulletin_message == "" || form1.value.service_bulletin_message == undefined) {
      this.inValidbulletin = true;
      this.message = "Please enter service bulletin message.";
    }
    else {
      this.inValidbulletin = false;
      this.service.addbulletindetails(form1.value).subscribe(data => {
        var status = data["response_code"];
        if (status == 200) {
          this.validBulletin = true;
          this.message = data["response_message"];
          this.service.filter('Register click');
          this.resetForm();
        }
      })
    }

  }
  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.service.formData = {
      bulletin_id: null,
      product_id: null,
      begin_date: "",
      end_date: "",
      first_SN: null,
      last_SN: null,
      title:"",
      service_bulletin_message: null
    }

  }
  
  openModel() {
    this.resetForm();
    this.validBulletin=false;
    this.inValidUpdatebulletin=false;
    this.validUpdateBulletin=false;
    this.inValidbulletin=false;

  }
  CloseModel() {
    this.service.filter('Register click');
    this.resetForm();
  }

  
}
