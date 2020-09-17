import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  readonly APIBaseUrl = "http://34.204.86.142:3002/uprserver/api/v1/";

  constructor(public http: HttpClient) { }

  monthly_overview(companyId)
  {
    console.log(this.APIBaseUrl+'AdminDashboard/monthly_overview',{company_id:companyId});
    return this.http.post<any>(this.APIBaseUrl+'AdminDashboard/monthly_overview',{company_id:companyId});
  }
}
