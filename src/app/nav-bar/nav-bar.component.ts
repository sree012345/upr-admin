import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adminAdduser } from '../models/adminAdduser-model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  adminUserDetails:adminAdduser;  
  Adminprivilege: any;
  PowerUserPrivilage:any;
  ReportingUserPrivialge:any;
  userRole:any;
  logedin=localStorage.getItem('loggedinAdminUser');
  CustomerServieUserPrivilage: boolean;
  constructor( public router: Router) { 
    this.adminUserDetails=JSON.parse(this.logedin|| '{}');
    this.userRole = this.adminUserDetails.user_role;
    if(this.userRole==1)
    {
      this.Adminprivilege=true;
    }
    else if(this.userRole==2){
      this.PowerUserPrivilage=true;
      this.Adminprivilege=false;
    }
    else if(this.userRole==3){
      this.PowerUserPrivilage=false;
      this.Adminprivilege=false;
      this.ReportingUserPrivialge=true
    }
    else{
      this.PowerUserPrivilage=false;
      this.Adminprivilege=false;
      this.ReportingUserPrivialge=false;
      this.CustomerServieUserPrivilage=true
    }
  }

  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem("rememberMe");
    localStorage.removeItem("loggedinAdminUser");
    this.router.navigateByUrl("login");
  }

}
