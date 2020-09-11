import { Component, OnInit } from '@angular/core';
import { PushNotificationService } from '../services/push-notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { SendPushNotification } from '../models/pushnotification-model';
export interface PeriodicElement {
  user_id: number;
  email_id: string;
  platform: string;
}
@Component({
  selector: 'app-send-push-notification',
  templateUrl: './send-push-notification.component.html',
  styleUrls: ['./send-push-notification.component.css']
})
export class SendPushNotificationComponent implements OnInit {
  listdta: any;
  sendPushNotificationData: SendPushNotification = new SendPushNotification();
  messageTitle: string;
  messageDescription: string;
  errorMessageView: boolean;
  successMessageView: boolean;
  loader_enable: boolean;
  message1: any;
  message: string;
   constructor(public service: PushNotificationService) { }
  displayedColumns: string[] = ['select', 'user_id', 'email_id', 'platform'];
  selection = new SelectionModel<PeriodicElement>(true, []);
  listData: MatTableDataSource<PeriodicElement> | undefined;

  ngOnInit(): void {
    this.service.getPushNotificationUser().subscribe(res => {
      console.log(res);
      this.listData = new MatTableDataSource(res['response_body']['users']);
      this.listdta = res['response_body']['users'];
      console.log(this.listdta)
    });
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.listdta?.length;
    return numSelected === numRows;
  }


  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.listdta?.forEach(row => this.selection.select(row));
  }
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.user_id + 1}`;
  }
 applyFilter(filtervalue : string){
    this.listData.filter = filtervalue.trim().toLocaleLowerCase();
  }
  SendPushNotification(title,description)
  {
    if(title==""|| title==undefined)
    {
      this.errorMessageView=true;
      this.message="Please enter notification title.";
    }
    else if(description==""|| description==undefined)
    {
      this.errorMessageView=true;
      this.message="Please enter notification description.";
    }else
    {
    
    this.sendPushNotificationData = new SendPushNotification();
    this.selection.selected.forEach(item => {
      let data={
        token:item["token"],
        type:item["platform"]
      }
      let userid=item["user_id"];
      let emailid=item["email_id"];
      this.sendPushNotificationData.token.push(data);
      this.sendPushNotificationData.user_id.push(userid);

    });
    if (this.sendPushNotificationData.hasValues()) {
      this.sendPushNotificationData.message_titile = title;
      this.sendPushNotificationData.message_description = description;
      console.log(this.sendPushNotificationData);
       this.service.sendPushNotification(this.sendPushNotificationData).subscribe(res => {
         console.log(res);
         var status=res["status"];
         var Responce_message=res["message"];
         if(status==200)
         {
          this.messageTitle="";
          this.messageDescription=""
          this.errorMessageView=false;
          this.successMessageView=true;
          this.loader_enable=false;
          this.message1=Responce_message;
         }
       });
    }
    else{
      this.errorMessageView=true;
      this.message="Please select atleast one customer.";
    }
  }
  }
}
