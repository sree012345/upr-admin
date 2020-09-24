import { Injectable } from '@angular/core';
import { login} from '../models/Login-model';
import {ForgotPassword} from '../models/forgotpassword-model';
import {SignUp} from '../models/signup-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {
  formData = new login();
  formData1 = new ForgotPassword();
  formData2 = new SignUp();
  constructor(private http: HttpClient) { }
  readonly APIBaseUrl = "http://34.204.86.142:3002/uprserver/api/v1/";
  adminlogin(log: login) {
    var logins = new login
    logins.email = log.email;
    logins.password = log.password;
    console.log(this.APIBaseUrl + 'AdminUser/login_admin_user', logins);
    return this.http.post<login[]>(this.APIBaseUrl + 'AdminUser/login_admin_user', logins);
  }

  forgotPassword(forgotpassword:ForgotPassword) {
    var fp = new ForgotPassword()
    fp.email = forgotpassword.email;
    console.log(this.APIBaseUrl + 'AdminUser/forgot_password', fp);
    return this.http.post<ForgotPassword[]>(this.APIBaseUrl + 'AdminUser/forgot_password', fp);
  }
  signUpUser(signUpData:SignUp)
  {
    console.log(this.APIBaseUrl + 'AdminUser/register_admin_user', signUpData);
    return this.http.post<any>(this.APIBaseUrl + 'AdminUser/register_admin_user', signUpData);
  }
}
