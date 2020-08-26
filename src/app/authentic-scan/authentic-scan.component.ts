import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { SerialNumberService } from '../services/serial-number.service';

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
  sizee:boolean=false;
  size:boolean=false;
  displayedColumns = ['Scan_Date', 'Item_Name','serial_number','Scan_Location','Device_PlatForm',"Device_Browser"];
  constructor(matIconRegistry: MatIconRegistry,public service:SerialNumberService) { 
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}  
  ngOnInit(): void {
    this.loadserialNumberlist();
  }

  loadserialNumberlist() {
    this.service.getSerialNumber().subscribe(data => {
     console.log(data);
     this.listData = new MatTableDataSource(data["response_body"]["serial_number"]);
     this.data=new MatTableDataSource(data["response_body"]["serial_number"]);
      // this.listData.sort = this.sort;
      //this.listData.paginator = this.paginator;
    });
  }
  applyFilter1(filtervalue : string){
    this.listData.filter = filtervalue.trim().toLocaleLowerCase();
  }
  button(s){
    console.log(s)
  }
}
