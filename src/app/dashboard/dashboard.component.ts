import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listData: MatTableDataSource<any>
  displayedColumns = ['scan_date', 'item', 'serial_number', 'scan_location'];

  constructor() { }

  ngOnInit(): void {
  } 

}
