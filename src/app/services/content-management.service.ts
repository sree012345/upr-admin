import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {addContentManagement} from '../models/contentManagement-model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentManagementService {
  readonly APIBaseUrl = "http://34.204.86.142:3002/uprserver/api/v1/";
  constructor(public http: HttpClient) { }
  formData=new addContentManagement
  contentList(companyId) {
    console.log(this.APIBaseUrl + 'admin/get_all_documents', {company_id:companyId});
    return this.http.post<any>(this.APIBaseUrl + 'admin/get_all_documents', {company_id:companyId});
  }
  get_productlist(companyId)
  {
    console.log(this.APIBaseUrl+'admin/get_all_products',{company_id:companyId});
    return this.http.post<any>(this.APIBaseUrl+'admin/get_all_products',{company_id:companyId});
  }

  private _listners = new Subject<any>();
  listen(): Observable<any> {
  return this._listners.asObservable();
  }

  filter(filterBy: string) {
    this._listners.next(filterBy);
  }

  addcontentdetails(add: addContentManagement) {
    var content = new addContentManagement();
    content.product_id=Number(add.product_id);
    content.document_or_link_name=add.document_or_link_name;
    content.begin_date=add.begin_date;
    content.end_date=add.end_date;
    content.URL=add.URL;
    console.log(this.APIBaseUrl + 'admin/add_documents_and_links', content);
    return this.http.post<any>(this.APIBaseUrl + 'admin/add_documents_and_links', content);
  }

  updateContent(add:addContentManagement,document_id)
  {
    var content = new addContentManagement();
    content.document_id=Number(document_id);
    content.document_or_link_name=add.document_or_link_name;
    content.begin_date=add.begin_date;
    content.end_date=add.end_date;
    content.URL=add.URL;
    console.log(this.APIBaseUrl+'admin/update_documents_and_links',content);
    return this.http.post<any>(this.APIBaseUrl+'admin/update_documents_and_links',content);
  }

  deletecontent(id)
  {
   console.log(id)
   console.log("##########################################")
   var content = new addContentManagement();
   content.document_id=id;
   console.log(this.APIBaseUrl+'admin/delete_documents_and_links',content);
   return this.http.post<any>(this.APIBaseUrl+'admin/delete_documents_and_links',content);
  }

  
}

