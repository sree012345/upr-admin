import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { product } from '../models/Product-model';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  readonly APIBaseUrl = "http://34.204.86.142:3002/uprserver/api/v1/";
  constructor(public http:HttpClient) { }
  formData=new product()
  authenticScan()
  {
    console.log(this.APIBaseUrl+'admin/view_scaned_authentic_products',{company_id:1});
    return this.http.post<any>(this.APIBaseUrl+'admin/view_scaned_authentic_products',{company_id:1});
  }
  authenticRegister()
  {
    console.log(this.APIBaseUrl+'admin/view_authentic_products_registration',{company_id:1});
    return this.http.post<any>(this.APIBaseUrl+'admin/view_authentic_products_registration',{company_id:1});
  }
  counterfeitScan()
  {
    console.log(this.APIBaseUrl+'admin/view_counterfeit_products_registration',{company_id:1});
    return this.http.post<any>(this.APIBaseUrl+'admin/view_counterfeit_products_registration',{company_id:1});  
  }
  document(){
    
    console.log(this.APIBaseUrl+'admin/get_all_documents',{company_id:1});
    return this.http.post<any>(this.APIBaseUrl+'admin/get_all_documents',{company_id:1});
      }
  recall(){
  console.log(this.APIBaseUrl+'admin/get_all_documents',{company_id:1});
return this.http.post<any>(this.APIBaseUrl+'admin/get_all_documents',{company_id:1});
          }
        }