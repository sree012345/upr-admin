import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import {customerService} from '../models/customerService-model';
@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  readonly APIBaseUrl = "http://34.204.86.142:3002/uprserver/api/v1/";

  constructor(public http: HttpClient) { }
  formData=new customerService()
  private _listners = new Subject<any>();
  listen(): Observable<any> {
    return this._listners.asObservable();
  }
  filter(filterBy: string) {
    this._listners.next(filterBy);
  }

  addcustomerservice(add: customerService) {
    var customer = new customerService();
    customer.company_id=Number(add.company_id);
    customer.product_id=Number(add.product_id);
    customer.serial_number=add.serial_number;
    console.log(this.APIBaseUrl + 'admin/customer_service', customer);
    return this.http.post<any>(this.APIBaseUrl + 'admin/customer_service', customer);
  }

  get_productlist(companyId)
  {
    console.log(this.APIBaseUrl+'admin/get_all_products',{company_id:companyId});
    return this.http.post<any>(this.APIBaseUrl+'admin/get_all_products',{company_id:companyId});
  }

}
