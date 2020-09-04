import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {contactUs} from '../models/contactUs-model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  readonly APIBaseUrl="http://34.204.86.142:3002/uprserver/api/v1/";

  constructor(public http: HttpClient) {}
  formData= new contactUs()

  private _listners = new Subject<any>();
  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  filter(filterBy: string) {
    this._listners.next(filterBy);
  }

  addContactUs(add:contactUs){
    var contact = new contactUs();
    contact.first_name=add.first_name;
    contact.last_name=add.last_name;
    contact.email=add.email;
    contact.subject=add.subject;
    contact.comments=add.comments;
    console.log(this.APIBaseUrl +'user/contact_us',contact);
    return this.http.post<any>(this.APIBaseUrl + 'user/contact_us',contact);
  
  }
  
}

