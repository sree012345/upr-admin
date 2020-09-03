import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { SerialNumberService } from '../services/serial-number.service';
import { ReportsService } from '../services/reports.service';
import { MatPaginator } from '@angular/material/paginator';
import * as moment from 'moment';
import { ContentManagementService } from '../services/content-management.service';
@Component({
  selector: 'app-authentic-scan',
  templateUrl: './authentic-scan.component.html',
  styleUrls: ['./authentic-scan.component.css']
})
export class AuthenticScanComponent implements OnInit {
  
  authenticRegisterdList: MatTableDataSource<any>
  counterfietScanList: MatTableDataSource<any>
  serialNumberList: MatTableDataSource<any>
  documentList: MatTableDataSource<any>
  pageSize =3;
  pageOfItems: Array<any>;
data:MatTableDataSource<any>;
pageNo: number;
  contentDetails: any;

pageEvents(event: any) {
  console.log(event.pageIndex);
  console.log(event.pageSize);
  if(event.pageIndex > this.pageNo) {
    // Clicked on next button
  } else {
    // Clicked on previous button
  }
  // The code that you want to execute on clicking on next and previous buttons will be written here.
}
  counter:string="Authentic Scans";
  displayedColumns = ['Scan_Date', 'Item_Name','serial_number','Scan_Location','Device_PlatForm',"Device_Browser"];
  displaydata=['Item_Name','Serial_Number'];
  documentdata=['Item_Name','Document','url','Begin_Date','End_Date']
  constructor(matIconRegistry: MatIconRegistry,public service:SerialNumberService,public service1:ReportsService,public service2: ContentManagementService) { 
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    

  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}  
  ngOnInit(): void {
    this.authenticScan();
  }
authenticScan()
{
  this.service1.authenticScan().subscribe(data => {
     console.log(data);
     this.authenticRegisterdList = new MatTableDataSource(data["response_body"]["scanned_authentic_product"]);
     this.authenticRegisterdList.paginator = this.paginator;
     let list = data["response_body"]["scanned_authentic_product"];
      list.forEach(element => {
        if (element.date_scanned != null) {
          let MailedDate = moment.utc(element.date_scanned).format("MM-DD-YYYY");
          element.date_scanned = MailedDate;
        }
       
      });
    });
}
  loadserialNumberlist() {
    this.service.getSerialNumber().subscribe(data => {
     console.log(data);
     this.serialNumberList = new MatTableDataSource(data["response_body"]["serial_number"]);
     this.serialNumberList.paginator = this.paginator;
     
    });
  }
counterfeitScanList()
{
  this.service1.counterfeitScan().subscribe(data => {
    console.log(data);
    this.counterfietScanList = new MatTableDataSource(data["response_body"]["counterfeit_product"]);
    let list = data["response_body"]["counterfeit_product"];
     list.forEach(element => {
       if (element.date_scanned != null) {
         let MailedDate = moment.utc(element.date_scanned).format("MM-DD-YYYY");
         element.date_scanned = MailedDate;
       }
      
     });
   });
}

documentationList()
{
  this.service2.contentList().subscribe(data => {
    this.documentList = new MatTableDataSource(data["response_body"]["All_Documents_Details"]);
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


  loaddocument() {
    
    this.service1.document().subscribe(data => {
     console.log(data);
    // this.listData1 = new MatTableDataSource(data["response_body"]["All_Documents_Details"]);
  
    });
  }
  document(s){
    console.log(s)
    if(s=="Profile"){
    this.counter="Counterfeit Scans"
    this.counterfeitScanList();
  }
  if(s=="home"){
    
    this.counter="Authentic Scans"
  }
  if(s=="documents"){
    this.counter="Documentation by Item"
    this.documentationList();
  }
  if(s=="serial_number")
  {
    this.counter="Serial Numbers"
    this.loadserialNumberlist();
  }
}
  applyFilter1(filtervalue : string){
    this.authenticRegisterdList.filter = filtervalue.trim().toLocaleLowerCase();
  }
  button(s){
    console.log(s)
  }
}
