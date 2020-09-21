import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login } from '../models/Login-model';
import { Subject, Observable } from 'rxjs';
import { product } from '../models/Product-model';
import { company } from '../models/company-model';
@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  readonly APIBaseUrl = "http://34.204.86.142:3002/uprserver/api/v1/";
  constructor(public http:HttpClient) { }
  formData=new product()
  product(companyId){    
  console.log(this.APIBaseUrl+'admin/get_all_products',{company_id:companyId});
  return this.http.post<any>(this.APIBaseUrl+'admin/get_all_products',{company_id:companyId});
    }
  deleteproduct(product_id){
    var prod=new product();
    prod.product_id=product_id
    console.log(this.APIBaseUrl+'admin/delete_product',prod);
    return this.http.post<any>(this.APIBaseUrl+'admin/delete_product',prod);
  }
  addproduct(add:product,companyId){
    var prod=new product();
    prod.product_name=add.product_name;
    prod.company_id=companyId;
    prod.activation_req=true;
    prod.is_serial_number_active=Boolean(add.is_serial_number_active);
    if(add.counterfeit_radius==undefined)
    {
      prod.counterfeit_radius="";
    }
    else{
      prod.counterfeit_radius=add.counterfeit_radius.toString();
    }
    prod.is_upc_code=Boolean(add.is_upc_code);
    prod.product_reference_number=add.product_reference_number;
    prod.content_management_req=Boolean(add.content_management_req);
    prod.counterfeit_req=Boolean(add.counterfeit_req)
    prod.recall_req=Boolean(add.recall_req);
    prod.forms_req=Boolean(add.forms_req)
    console.log(this.APIBaseUrl+'admin/add_product',prod);
    return this.http.post<any>(this.APIBaseUrl+'admin/add_product',prod);
  }
  updateproduct(add:product,product_id){
    var prod=new product();
    prod.product_id=Number(product_id)
    prod.product_name=add.product_name;
    if(add.counterfeit_radius==undefined)
    {
      prod.counterfeit_radius="";
    }
    else{
      prod.counterfeit_radius=add.counterfeit_radius.toString();
    }
    prod.content_management_req=Boolean(add.content_management_req);
    prod.counterfeit_req=Boolean(add.counterfeit_req)
    prod.recall_req=Boolean(add.recall_req);
    prod.forms_req=Boolean(add.forms_req)
    console.log(this.APIBaseUrl+'admin/update_product',prod);
    return this.http.post<any>(this.APIBaseUrl+'admin/update_product',prod);
  }
  private _listners = new Subject<any>();
 listen() : Observable<any> {
   return this._listners.asObservable();
 }
 filter(filterBy: string){
   this._listners.next(filterBy);
 }

  
}
