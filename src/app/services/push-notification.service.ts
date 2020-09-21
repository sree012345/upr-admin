import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {
  readonly APIBaseUrl = "http://34.204.86.142:3002/uprserver/api/v1/";
  constructor(public http:HttpClient) { }

  getPushNotificationUser()
  {      
  console.log(this.APIBaseUrl+'pushnotification/push_notification_customers',null);
  return this.http.post<any>(this.APIBaseUrl+'pushnotification/push_notification_customers',null);
  }

  sendPushNotification(notificationData)
  {
    console.log(notificationData);
    console.log(this.APIBaseUrl+'pushnotification/send_push_notification',notificationData)
    return this.http.post<any>(this.APIBaseUrl+'pushnotification/send_push_notification',notificationData);
  }
}
