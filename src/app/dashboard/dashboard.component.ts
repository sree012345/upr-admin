import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { adminAdduser } from '../models/adminAdduser-model';
import {DashboardService} from '../services/dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listData: MatTableDataSource<any>
  displayedColumns = ['scan_date', 'item', 'serial_number', 'scan_location'];

  adminUserDetails:adminAdduser;  
  logedin=localStorage.getItem('loggedinAdminUser');
  monthlyCount: any;
  authentic: any;
  recall: any;
  constructor(public service:DashboardService) { }

  ngOnInit(): void {
    this.monthlyOverView();
  } 
  monthlyOverView()
  {
    this.adminUserDetails=JSON.parse(this.logedin|| '{}');
    this.adminUserDetails.company_id= this.adminUserDetails.company_id;
    this.service.monthly_overview(this.adminUserDetails.company_id).subscribe(data => {
      this.monthlyCount = (data["response_body"]);
      this.authentic= this.monthlyCount.authentic;
      this.recall=this.monthlyCount.racalls;
    });

  }

}
