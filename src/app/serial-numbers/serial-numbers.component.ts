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

@Component({
  selector: 'app-serial-numbers',
  templateUrl: './serial-numbers.component.html',
  styleUrls: ['./serial-numbers.component.css']
})
export class SerialNumbersComponent implements OnInit {

  
  listData: MatTableDataSource<any>
  displayedColumns = ['product_name', 'serial_number','Options'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(private router: Router, public service: SerialNumberService,private dialog: MatDialog) {
    this.dialog.afterAllClosed.subscribe(()=>{
      this.loadserialNumberlist();
    })
   }

  ngOnInit() {
    this.loadserialNumberlist();
  }
  loadserialNumberlist() {
    this.service.getSerialNumber().subscribe(data => {
     console.log(data);
     this.listData = new MatTableDataSource(data["response_body"]["serial_number"]);
      this.listData.sort = this.sort;
      //this.listData.paginator = this.paginator;
    });

  }
  applyFilter(filtervalue : string){
    this.listData.filter = filtervalue.trim().toLocaleLowerCase();
  }

  addSerialButtonClicked()
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = "100%";
    this.dialog.open(AddSerialNumberComponent);
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
