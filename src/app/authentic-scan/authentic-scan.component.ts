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
  displayedColumns = ['product_name', 'serial_number','Options'];
  constructor(matIconRegistry: MatIconRegistry,public service:SerialNumberService) { 
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }

  ngOnInit(): void {
    this.loadserialNumberlist();
  }

  loadserialNumberlist() {
    this.service.getSerialNumber().subscribe(data => {
     console.log(data);
     this.listData = new MatTableDataSource(data["response_body"]["serial_number"]);
      // this.listData.sort = this.sort;
      //this.listData.paginator = this.paginator;
    });
  }
}
