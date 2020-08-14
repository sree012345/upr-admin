import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SerialNumber } from '../models/serialNumber-model';

@Injectable({
  providedIn: 'root'
})
export class SerialNumberService {
formData=new SerialNumber();
  constructor(private http:HttpClient) { }
  readonly APIBaseUrl = "http://34.204.86.142:3002/uprserver/api/v1/";
  
  getSerialNumber()
  {
    
    console.log(this.APIBaseUrl+'admin/get_serial_number_list',{company_id:1});
    return this.http.post<any>(this.APIBaseUrl+'admin/get_serial_number_list',{company_id:1});
  }

}
