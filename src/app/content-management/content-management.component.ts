import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import {ContentManagementService} from '../services/content-management.service'
import { addContentManagement } from '../models/contentManagement-model';

@Component({
  selector: 'app-content-management',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.css']
})
export class ContentManagementComponent implements OnInit {
  inValidContent: boolean = false;
  validContent: boolean = false;
  message: string;
  message1:string;
  message2:string;
  document_id:any;
  docuemnt_id:any;
  productlist:any;
  validUpdateContent: boolean = false;
  inValidUpdateContent: boolean = false;
  inValidDeleteContent: boolean=false;
  validDeleteContent: boolean=false;
  listData: MatTableDataSource<any>
  displayedColumns = ['product_name', 'document_or_link_name', 'begin_date', 'end_date', 'URL','edit', 'delete'];
  contentDetails:any;

  constructor(public service: ContentManagementService) {
    this.service.listen().subscribe((m: any) => {
      this.loadContentList();
    })
   }

  ngOnInit(): void {
    this.loadContentList();
    this.service.get_productlist().subscribe(data => {
      this.productlist = (data["response_body"]["products_details"]);
      console.log(this.productlist);
      });
  
  }
  loadContentList() {
    this.service.contentList().subscribe(data => {
      this.listData = new MatTableDataSource(data["response_body"]["All_Documents_Details"]);
      this.contentDetails = data["response_body"]["All_Documents_Details"];
      this.contentDetails.forEach(element => {
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

  addContent(form1: NgForm) {
    if (form1.value.product_id == "" || form1.value.product_id == undefined) {
      this.inValidContent = true;
      this.message = "Please select item.";
    }
    else if (form1.value.document_or_link_name == true || form1.value.document_or_link_name == undefined) {
      this.inValidContent = true;
      this.message = "Please enter  document or link name.";
    }
    else if (form1.value.URL == true || form1.value.URL == undefined) {
      this.inValidContent = true;
      this.message = "Please enter  document URL.";
    }
    else if (form1.value.begin_date == true || form1.value.begin_date == undefined) {
      this.inValidContent = true;
      this.message = "Please enter  begin date.";
    }
    else if (form1.value.end_date == true || form1.value.end_date == undefined) {
      this.inValidContent = true;
      this.message = "Please enter end date.";
    }
  
   
    else {
      this.inValidContent = false;
      this.service.addcontentdetails(form1.value).subscribe(data => {
        var status = data["response_code"];
        if (status == 200) {
          this.validContent = true;
          this.message = data["response_message"];
          this.service.filter('Register click');
          this.resetForm();
        }
      })
    }
  }

  openModel() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.service.formData = {
      document_id: null,
      product_id: null,
      document_or_link_name:null,
      begin_date: "",
      end_date: "",
      URL: null
    }

  }
   CloseModel() {
    this.service.filter('Register click');
    this.resetForm();
  }

  updateContent(pro: addContentManagement,document_id) {
    this.service.formData = pro;
    this.service.formData.document_or_link_name = pro.document_or_link_name
    this.service.formData.begin_date = new Date(pro.begin_date)
    this.service.formData.end_date = new Date(pro.end_date)
    this.service.formData.URL = pro.URL
    this.document_id = document_id;
  }
  contentUpdate(form: NgForm) {
    this.service.updateContent(form.value, this.document_id).subscribe(data => {
    var status = data["response_code"];
      console.log(status)
      if (status == 200) {
        this.validUpdateContent = true;
        this.message1 = data["response_message"];
        this.service.filter('Register click');
      }

    });
  }

  deleteContent(id)
  {
    this.document_id = id;
    this.inValidDeleteContent=false;
    this.validDeleteContent=false
  }
  Contentdelete()
  {
    this.service.deletecontent(this.document_id).subscribe(data => {
      var status = data["response_code"];
      console.log(status)
      if (status == 200) {
        this.validDeleteContent = true;
        this.message2 = data["response_message"];
        this.service.filter('Register click');
      }
    });
  }

  applyFilter1(filtervalue: string) {
    this.listData.filter = filtervalue.trim().toLocaleLowerCase();
  }


}
