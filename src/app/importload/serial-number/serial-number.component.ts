import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import * as _moment from 'moment';


@Component({
  selector: 'app-serial-number',
  templateUrl: './serial-number.component.html',
  styleUrls: ['./serial-number.component.css']
})
export class SerialNumberComponent implements OnInit {
  uploadForm: FormGroup; 
  changes:boolean=true;
  validAddSerial:boolean=false;
  invalidAddSerial:boolean=false;
  message:any;
  profile:any;
  fileName: string;
  file: File;
  filename: string = null;
  logedin=localStorage.getItem('loggedinAdminUser');

  SERVER_URL = "http://34.204.86.142:3002/uprserver/api/v1/import/import_serial_number";
  adminUserDetails: any;
  companyId: any;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  uploadedFile(event) {
     
    if (event.target.files.length > 0) {
      const file_data = event.target.files[0];
      this.uploadForm.get('profile').setValue(file_data);
      this.profile=event.target.files;
      console.log(this.profile);
      this.filename = event.target.files[0].name;
      console.log(this.filename);
    }
 
 
  }
  onSubmit() {
    this.adminUserDetails=JSON.parse(this.logedin|| '{}');
    this.companyId= this.adminUserDetails.company_id;
    const formData = new FormData();
    formData.append('file_data', this.uploadForm.get('profile').value);
    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(data =>
      { 
        console.log("submit");
        console.log(data);
        console.log(formData)
        var status = data["response_code"];
        console.log(status);
      if(status==200){ 
       console.log("working");
        this.validAddSerial=true;
        this.invalidAddSerial=false;
        this.message = data["response_message"];
        
      }
      else{
        console.log("not working");
      }
    })

  }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

}
