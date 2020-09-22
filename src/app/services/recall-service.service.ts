import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { addRecall } from '../models/Recall-model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecallServiceService {
  readonly APIBaseUrl = 'http://34.204.86.142:3002/uprserver/api/v1/';
  constructor(public http: HttpClient) {}
  formData = new addRecall();
  recallList(companyId) {
    console.log(this.APIBaseUrl + 'admin/get_all_recall_list', {
      company_id: companyId,
    });
    return this.http.post<any>(this.APIBaseUrl + 'admin/get_all_recall_list', {
      company_id: companyId,
    });
  }
  addrecalldetails(add: addRecall) {
    var recall = new addRecall();
    recall.product_id = Number(add.product_id);
    recall.title = add.title;
    recall.begin_date = add.begin_date;
    recall.end_date = add.end_date;
    recall.first_SN = add.first_SN;
    recall.last_SN = add.last_SN;
    recall.recall_message = add.recall_message;
    console.log(this.APIBaseUrl + 'admin/add_recall', recall);
    return this.http.post<any>(this.APIBaseUrl + 'admin/add_recall', recall);
  }
  private _listners = new Subject<any>();
  listen(): Observable<any> {
    return this._listners.asObservable();
  }
  filter(filterBy: string) {
    this._listners.next(filterBy);
  }
  get_productlist(companyId) {
    console.log(this.APIBaseUrl + 'admin/get_all_products', {
      company_id: companyId,
    });
    return this.http.post<any>(this.APIBaseUrl + 'admin/get_all_products', {
      company_id: companyId,
    });
  }
  updaterecall(add: addRecall, recall_id) {
    console.log(add);
    var recall = new addRecall();
    recall.recall_id = Number(recall_id);
    recall.title = add.title;
    recall.begin_date = add.begin_date;
    recall.end_date = add.end_date;
    recall.first_SN = add.first_SN;
    recall.last_SN = add.last_SN;
    recall.recall_message = add.recall_message;
    console.log(this.APIBaseUrl + 'admin/update_recall', recall);
    return this.http.post<any>(this.APIBaseUrl + 'admin/update_recall', recall);
  }
  deleterecall(id) {
    console.log(id);
    console.log('##########################################');
    var recall = new addRecall();
    recall.recall_id = id;
    console.log(this.APIBaseUrl + 'admin/delete_recall', recall);
    return this.http.post<any>(this.APIBaseUrl + 'admin/delete_recall', recall);
  }
}
