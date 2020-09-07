import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {adminAdduser} from '../models/adminAdduser-model';
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAdduserService {
  readonly APIBaseUrl = "http://34.204.86.142:3002/uprserver/api/v1/";

  constructor(public http:HttpClient) {
   }
   formData=new adminAdduser();
   private _listners = new Subject<any>();
   listen(): Observable<any> {
     return this._listners.asObservable();
   }

   filter(filterBy: string) {
    this._listners.next(filterBy);
  }

  addAdmiuser(add:adminAdduser){
    var adminUser=new adminAdduser();
    adminUser.first_name=add.first_name;
    adminUser.last_name=add.last_name;
    adminUser.email=add.email;
    adminUser.phone=add.phone;
    adminUser.company_name=add.company_name;
    adminUser.company_id=1;
    adminUser.address=add.address;
    adminUser.city=add.city;
    adminUser.state_province=add.state_province;
    adminUser.postal_code=add.postal_code;
    adminUser.country=add.country;
    adminUser.user_role=Number(add.user_role);
    adminUser.is_active=Boolean(add.is_active);
    console.log(this.APIBaseUrl + 'AdminUser/register_admin_user',adminUser,);
    return this.http.post<any>(this.APIBaseUrl + 'AdminUser/register_admin_user',adminUser);
  }

}
