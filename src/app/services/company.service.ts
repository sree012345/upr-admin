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

  addCompanyDetails(add:company,logourl){
    var companydetails=new company();
    companydetails.company_name=add.company_name;
    companydetails.company_address=add.company_address;
    companydetails.company_city=add.company_city;
    companydetails.company_state_province=add.company_state_province;
    companydetails.company_postal_code=add.company_postal_code;
    companydetails.company_country=add.company_country;
    companydetails.company_phone=add.company_phone;
    companydetails.logo_url=logourl;
    companydetails.company_website=add.company_website;
    companydetails.company_type=add.company_type;
    companydetails.is_active=Boolean(add.is_active);
    console.log(this.APIBaseUrl + 'admin/add_company',companydetails);
    return this.http.post<any>(this.APIBaseUrl + 'admin/add_company',companydetails);
  }
}


