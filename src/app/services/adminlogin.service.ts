import { Injectable } from '@angular/core';
import { login } from '../models/Login-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {
  formData=new login();
  constructor(private http:HttpClient) { }
  readonly APIBaseUrl = "http://34.204.86.142:3002/uprserver/api/v1/";
 adminlogin(log:login){
        var logins=new login
        logins.email=log.email;
        logins.password=log.password;
        console.log(this.APIBaseUrl+'AdminUser/login_admin_user',logins);
        return this.http.post<login[]>(this.APIBaseUrl+'AdminUser/login_admin_user',logins);
          }
}
