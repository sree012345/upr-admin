import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../models/Product-model';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  readonly APIBaseUrl = "http://34.204.86.142:3002/uprserver/api/v1/";
  constructor(public http: HttpClient) { }
  formData = new product()
  authenticScan(companyId) {
    console.log(this.APIBaseUrl + 'admin/view_scaned_authentic_products', { company_id: companyId });
    return this.http.post<any>(this.APIBaseUrl + 'admin/view_scaned_authentic_products', { company_id: companyId });
  }
  authenticRegister(companyId) {
    console.log(this.APIBaseUrl + 'admin/view_authentic_products_registration',{ company_id: companyId });
    return this.http.post<any>(this.APIBaseUrl + 'admin/view_authentic_products_registration',{ company_id: companyId });
  }
  counterfeitScan(companyId) {
    console.log(this.APIBaseUrl + 'admin/view_counterfeit_products_registration',{ company_id: companyId });
    return this.http.post<any>(this.APIBaseUrl + 'admin/view_counterfeit_products_registration', { company_id: companyId });
  }
  document(companyId) {

    console.log(this.APIBaseUrl + 'admin/get_all_documents', { company_id: companyId });
    return this.http.post<any>(this.APIBaseUrl + 'admin/get_all_documents',{ company_id: companyId });
  }
  recall(companyId) {
    console.log(this.APIBaseUrl + 'admin/get_all_documents',{ company_id: companyId });
    return this.http.post<any>(this.APIBaseUrl + 'admin/get_all_documents',{ company_id: companyId });
  }
  usersecurity(companyId)
  {
    console.log(this.APIBaseUrl + 'AdminUser/view_registered_users',{ company_id: companyId });
    return this.http.post<any>(this.APIBaseUrl + 'AdminUser/view_registered_users',{ company_id: companyId });
 
  }
}