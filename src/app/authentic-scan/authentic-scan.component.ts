import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { SerialNumberService } from '../services/serial-number.service';
import { ReportsService } from '../services/reports.service';
import { MatPaginator } from '@angular/material/paginator';
import * as moment from 'moment';
@Component({
  selector: 'app-authentic-scan',
  templateUrl: './authentic-scan.component.html',
  styleUrls: ['./authentic-scan.component.css']
})
export class AuthenticScanComponent implements OnInit {
  
  authenticRegisterdList: MatTableDataSource<any>
  counterfietScanList: MatTableDataSource<any>
  serialNumberList: MatTableDataSource<any>
  listData: MatTableDataSource<any>
  pageSize =3;
  pageOfItems: Array<any>;
data:MatTableDataSource<any>;
pageNo: number;

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
  displaydata=['Item_Name','Serial_Number']
  constructor(matIconRegistry: MatIconRegistry,public service:SerialNumberService,public service1:ReportsService) { 
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    

  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}  
  ngOnInit(): void {
    this.loadserialNumberlist();
    this.loaddocument();
    this.authenticScan();
    this.counterfeitScanList();
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
   console.log(this.counter)
  }
  if(s=="home"){
    
    this.counter="Authentic Scans"
  }
  if(s=="setting"){
    this.counter="Serial Numbers"
    console.log(this.counter)
  }
  if(s=="serial_number")
  {
    this.counter="Serial Numbers"
  }
}
  applyFilter1(filtervalue : string){
    this.listData.filter = filtervalue.trim().toLocaleLowerCase();
  }
  button(s){
    console.log(s)
  }
}
