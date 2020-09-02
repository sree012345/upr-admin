import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { addSerialNumber, SerialNumber } from '../models/serialNumber-model';

@Injectable({
  providedIn: 'root'
})
export class SerialNumberService {
formData=new addSerialNumber();
  constructor(private http:HttpClient) { }
  readonly APIBaseUrl = "http://34.204.86.142:3002/uprserver/api/v1/";
  
  getSerialNumber()
  {    
    console.log(this.APIBaseUrl+'admin/get_serial_number_list',{company_id:1});
    return this.http.post<any>(this.APIBaseUrl+'admin/get_serial_number_list',{company_id:1});
  }
  get_productlist()
  {
    console.log(this.APIBaseUrl+'admin/get_all_products_serialnumbers',{company_id:1});
    return this.http.post<any>(this.APIBaseUrl+'admin/get_all_products_serialnumbers',{company_id:1});
  }

  addSerialNumber(serialNumberDetails)
  {
    console.log(this.APIBaseUrl+'admin/add_serial_number',serialNumberDetails);
    return this.http.post<any>(this.APIBaseUrl+'admin/add_serial_number',serialNumberDetails);
  }
 
  deleteSerialNumber(snId)
  {
    var snData=new SerialNumber();
    snData.serial_number_id=snId
    console.log(this.APIBaseUrl+'admin/delete_serial_number',snData);
    return this.http.post<any>(this.APIBaseUrl+'admin/delete_serial_number',snData);
  }

private _listners = new Subject<any>();
 listen() : Observable<any> {
   return this._listners.asObservable();
 }
 filter(filterBy: string){
   this._listners.next(filterBy);
 }
}
