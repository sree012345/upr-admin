import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{addBrandProtection} from '../models/brandProtection-model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandProtectionService {
  readonly APIBaseUrl = "http://34.204.86.142:3002/uprserver/api/v1/";
  constructor(public http: HttpClient) { }
  formData = new addBrandProtection()
  brandList() {
    console.log(this.APIBaseUrl + 'admin/get_brand_protection', { company_id: 1 });
    return this.http.post<any>(this.APIBaseUrl + 'admin/get_brand_protection', { company_id: 1 });
  }
  private _listners = new Subject<any>();
  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  filter(filterBy: string) {
    this._listners.next(filterBy);
  }

  addbrandDetails(add: addBrandProtection) {
    console.log("addBrand");
    var brand = new addBrandProtection();
    brand.product_id=Number(add.product_id);
    brand.location_detection=Boolean(add.location_detection);
    brand.radius_in_miles=add.radius_in_miles;
    console.log(this.APIBaseUrl + 'admin/add_brand_protection', brand);
    return this.http.post<any>(this.APIBaseUrl + 'admin/add_brand_protection', brand);
  }

  updatebrand(add:addBrandProtection,brand_id)
  {
    console.log(brand_id);
    var brand = new addBrandProtection();
    brand.brand_id=Number(brand_id);
    brand.location_detection=Boolean(add.location_detection);
    brand.radius_in_miles=add.radius_in_miles;
    console.log(brand.radius_in_miles);
    console.log(this.APIBaseUrl+'admin/update_brand_protection',brand);
    return this.http.post<any>(this.APIBaseUrl+'admin/update_brand_protection',brand);
  }

  get_productlist()
  {
    console.log(this.APIBaseUrl+'admin/get_all_products',{company_id:1});
    return this.http.post<any>(this.APIBaseUrl+'admin/get_all_products',{company_id:1});
  }
}
