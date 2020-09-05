import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {company} from '../models/company-model';
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  readonly APIBaseUrl = "http://34.204.86.142:3002/uprserver/api/v1/";

  constructor(public http:HttpClient) { }
  formData=new company()
  private _listners = new Subject<any>();
  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  filter(filterBy: string) {
    this._listners.next(filterBy);
  }

  addCompanyDetails(add:company){
    var companydeatails=new company();
    companydeatails.company_name=add.company_name;
    companydeatails.company_address=add.company_address;
    companydeatails.company_city=add.company_city;
    companydeatails.company_state_province=add.company_state_province;
    companydeatails.company_postal_code=add.company_postal_code;
    companydeatails.company_country=add.company_country;
    companydeatails.company_phone=add.company_phone;
    companydeatails.company_website=add.company_website;
    companydeatails.company_type=add.company_type;
    console.log(this.APIBaseUrl + 'admin/add_company',companydeatails);
    return this.http.post<any>(this.APIBaseUrl + 'admin/add_company',companydeatails);
  }
}


