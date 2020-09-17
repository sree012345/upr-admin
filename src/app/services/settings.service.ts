import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  readonly APIBaseUrl = "http://34.204.86.142:3002/uprserver/api/v1/";
  constructor(public http: HttpClient) { }

  editProfile(editProfile)
  {
    console.log(this.APIBaseUrl+'AdminUser/Update_admin_user_profile',editProfile);
    return this.http.post<any>(this.APIBaseUrl+'AdminUser/Update_admin_user_profile',editProfile); 
  }
  changePassword(changePassword)
  {
    console.log(this.APIBaseUrl+'AdminUser/change_password',changePassword);
    return this.http.post<any>(this.APIBaseUrl+'AdminUser/change_password',changePassword);
  }
  notificationSettings(settings)
  {
    console.log(this.APIBaseUrl+'AdminUser/update_notification_settings',settings);
    return this.http.post<any>(this.APIBaseUrl+'AdminUser/update_notification_settings',settings);
  }
}
