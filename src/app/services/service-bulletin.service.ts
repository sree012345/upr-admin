import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { ServiceBulletin } from '../models/serviceBulletin-model';

@Injectable({
  providedIn: 'root'
})
export class ServiceBulletinService {
  formData=new ServiceBulletin();
  readonly APIBaseUrl = "http://34.204.86.142:3002/uprserver/api/v1/";
  constructor(public http: HttpClient) { }
  get_productlist()
  {
    console.log(this.APIBaseUrl+'admin/get_all_products',{company_id:1});
    return this.http.post<any>(this.APIBaseUrl+'admin/get_all_products',{company_id:1});
  }
  serviceBulletinList()
  {
    console.log(this.APIBaseUrl+'admin/get_all_service_bulletins_list',{company_id:1});
    return this.http.post<any>(this.APIBaseUrl+'admin/get_all_service_bulletins_list',{company_id:1});
  }
  private _listners = new Subject<any>();
 listen() : Observable<any> {
   return this._listners.asObservable();
 }
 filter(filterBy: string){
   this._listners.next(filterBy);
 }
 addbulletindetails(add: ServiceBulletin)
 {
  var bulletin = new ServiceBulletin();
  bulletin.product_id=Number(add.product_id);
  bulletin.title=add.title;
  bulletin.begin_date=add.begin_date;
  bulletin.end_date=add.end_date;
  bulletin.first_SN=add.first_SN;
  bulletin.last_SN=add.last_SN;
  bulletin.service_bulletin_message=add.service_bulletin_message;
  console.log(this.APIBaseUrl + 'admin/add_service_bulletin', bulletin);
  return this.http.post<any>(this.APIBaseUrl + 'admin/add_service_bulletin', bulletin);
 }
 updatebulletin(add: ServiceBulletin,id)
 {
  var bulletin = new ServiceBulletin();
  bulletin.bulletin_id=Number(id);
  bulletin.title=add.title;
  bulletin.begin_date=add.begin_date;
  bulletin.end_date=add.end_date;
  bulletin.first_SN=add.first_SN;
  bulletin.last_SN=add.last_SN;
  bulletin.service_bulletin_message=add.service_bulletin_message;
    console.log(this.APIBaseUrl+'admin/update_service_bulletin',bulletin);
    return this.http.post<any>(this.APIBaseUrl+'admin/update_service_bulletin',bulletin); 
 }
 deletebulletin(id)
 {
  console.log(id)
  console.log("##########################################")
  var bulletin = new ServiceBulletin();
  bulletin.bulletin_id=id;
  console.log(this.APIBaseUrl+'admin/delete_service_bulletin',bulletin);
  return this.http.post<any>(this.APIBaseUrl+'admin/delete_service_bulletin',bulletin);
 }
}
