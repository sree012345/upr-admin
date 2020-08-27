import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { SerialNumberService } from '../services/serial-number.service';
import { ReportsService } from '../services/reports.service';
@Component({
  selector: 'app-authentic-scan',
  templateUrl: './authentic-scan.component.html',
  styleUrls: ['./authentic-scan.component.css']
})
export class AuthenticScanComponent implements OnInit {
  listData: MatTableDataSource<any>
  pageSize =3;
  pageOfItems: Array<any>;
data:MatTableDataSource<any>;
  page=4;
  counter:string="Authentic Scans";
  listData1:MatTableDataSource<any>;
  displayedColumns = ['Scan_Date', 'Item_Name','serial_number','Scan_Location','Device_PlatForm',"Device_Browser"];
  displaydata=['Item_Name','Document','url','Begin_Date','End_Date']
  constructor(matIconRegistry: MatIconRegistry,public service:SerialNumberService,public service1:ReportsService) { 
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    

  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}  
  ngOnInit(): void {
    this.loadserialNumberlist();
    this.loaddocument();
  }

  loadserialNumberlist() {
    this.service.getSerialNumber().subscribe(data => {
     console.log(data);
     this.listData = new MatTableDataSource(data["response_body"]["serial_number"]);
    });
  }
  loaddocument() {
    
    this.service1.document().subscribe(data => {
     console.log(data);
     this.listData1 = new MatTableDataSource(data["response_body"]["All_Documents_Details"]);
  
    });
  }
  document(s){
    console.log(s)
    if(s=="Profile"){
    this.counter="Counterfeit Scans"
   console.log(this.counter)
  }
  if(s=="home"){
    
    console.log(this.counter)
  }
  if(s=="setting"){
    this.counter="Documentation by Item"
    console.log(this.counter)
  }
}
  applyFilter1(filtervalue : string){
    this.listData.filter = filtervalue.trim().toLocaleLowerCase();
  }
  button(s){
    console.log(s)
  }
}
