import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import * as _moment from 'moment';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-import-brand-protection',
  templateUrl: './import-brand-protection.component.html',
  styleUrls: ['./import-brand-protection.component.css']
})
export class ImportBrandProtectionComponent implements OnInit {

  SERVER_URL = "http://34.204.86.142:3002/uprserver/api/v1/import/import_add_brand_protection";
    uploadForm: FormGroup; 
    changes:boolean=true;
    validAddBrand:boolean=false;
    invalidAddBrand:boolean=false;
    message:any;
    profile:any;
    fileName: string;
    file: File;
    filename: string = null;

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
        this.validAddBrand=true;
        this.invalidAddBrand=false;
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
