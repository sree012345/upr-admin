import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RecallServiceService } from '../services/recall-service.service';
import * as moment from 'moment';
import { NgForm } from '@angular/forms';
import { addRecall } from '../models/Recall-model';

@Component({
  selector: 'app-recall',
  templateUrl: './recall.component.html',
  styleUrls: ['./recall.component.css']
})
export class RecallComponent implements OnInit {
  inValidRecall: boolean = false;
  validRecall: boolean = false;
  listData: MatTableDataSource<any>
  displayedColumns = ['product_name', 'begin_date', 'end_date', 'first_sn', 'last_sn', 'recall_message', 'edit', 'delete'];
  recallDetails: any;
  message: string;
  recalllist: any;
  recall_id: any;
  validUpdateRecall: boolean = false;
  inValidUpdateRecall: boolean = false;
  validDeleteRecall: boolean = false;
  inValidDeleteRecall: boolean = false;
  message1: any;
  message2: any;
  constructor(public service: RecallServiceService) {
    this.service.listen().subscribe((m: any) => {
      this.loadRecallList();
    })
  }

  ngOnInit(): void {
    this.loadRecallList();
    this.service.get_productlist().subscribe(data => {
      this.recalllist = (data["response_body"]["products_details"]);
    });
  }
  loadRecallList() {
    this.service.recallList().subscribe(data => {
      this.listData = new MatTableDataSource(data["response_body"]["recall_details"]);
      this.recallDetails = data["response_body"]["recall_details"];

      this.recallDetails.forEach(element => {
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

  addRecall(form1: NgForm) {
    console.log(form1.value.begin_date);
    if (form1.value.product_id == "" || form1.value.product_id == undefined) {
      this.inValidRecall = true;
      this.message = "Please select item.";
    }
    else if (form1.value.title == "" || form1.value.title == undefined) {
      this.inValidRecall = true;
      this.message = "Please enter  recal title";
    }
    else if (form1.value.begin_date == "" || form1.value.begin_date == undefined) {
      this.inValidRecall = true;
      this.message = "Please enter  begin date.";
    }
    else if (form1.value.end_date == "" || form1.value.end_date == undefined) {
      this.inValidRecall = true;
      this.message = "Please enter end date.";
    }
    else if (form1.value.first_SN == "" || form1.value.first_SN == undefined) {
      this.inValidRecall = true;
      this.message = "Please enter first serial number.";
    }
    else if (form1.value.last_SN == "" || form1.value.last_SN == undefined) {
      this.inValidRecall = true;
      this.message = "Please enter last serial number.";
    }
    else if (form1.value.recall_message == "" || form1.value.recall_message == undefined) {
      this.inValidRecall = true;
      this.message = "Please enter recall message.";
    }
    else {
      this.inValidRecall = false;
      this.service.addrecalldetails(form1.value).subscribe(data => {
        var status = data["response_code"];
        if (status == 200) {
          this.validRecall = true;
          this.message = data["response_message"];
          this.service.filter('Register click');
          this.resetForm();
        }
      })
    }
  }
  applyFilter1(filtervalue: string) {
    this.listData.filter = filtervalue.trim().toLocaleLowerCase();
  }

  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.service.formData = {
      recall_id: null,
      title:"",
      product_id: null,
      begin_date: "",
      end_date: "",
      first_SN: null,
      last_SN: null,
      recall_message: null
    }

  }
  openModel() {
    this.resetForm();
  }
  CloseModel() {
    this.service.filter('Register click');
    this.resetForm();
  }

  updateRecall(pro: addRecall, recall_id) {
    this.service.formData = pro;
    this.service.formData.begin_date = new Date(pro.begin_date)
    this.service.formData.end_date = new Date(pro.end_date)
    this.recall_id = recall_id;
  }
  recallUpdate(form: NgForm) {
    this.service.updaterecall(form.value, this.recall_id).subscribe(data => {

      var status = data["response_code"];
      console.log(status)
      if (status == 200) {
        this.validUpdateRecall = true;
        this.message1 = data["response_message"];
        this.service.filter('Register click');
      }

    });
  }

  deleteRecall(recall_id)
  {
    this.recall_id = recall_id;
  }
  Recalldelete()
  {
    this.service.deleterecall(this.recall_id).subscribe(data => {
      var status = data["response_code"];
      console.log(status)
      if (status == 200) {
        this.validDeleteRecall = true;
        this.message2 = data["response_message"];
        this.service.filter('Register click');
      }
    });
  }
}
