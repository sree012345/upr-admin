import { Component, OnInit } from '@angular/core';
import { SerialNumberService } from 'src/app/services/serial-number.service';
import { addSerialNumber } from '../../models/serialNumber-model';
import { NgForm } from '@angular/forms';
import * as moment from 'moment'
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-serial-number',
  templateUrl: './add-serial-number.component.html',
  styleUrls: ['./add-serial-number.component.css']
})
export class AddSerialNumberComponent implements OnInit {
  productlist: any;  
  productId:number=0;
  serialNumber:string='';
  manifatureDate:string='';
  
  addSerialNumers:addSerialNumber=new addSerialNumber();
  constructor(public service: SerialNumberService,private dialogbox: MatDialogRef<AddSerialNumberComponent>) { 
    
  }

  ngOnInit(): void {
   
  }

  addSerialNumberClicked(form: NgForm)
  {
    //console.log(form.value)
    this.addSerialNumers=new addSerialNumber();
    this.addSerialNumers.product_id=Number(form.value.product_id);
    this.addSerialNumers.serial_number=form.value.serial_number;
    this.service.addSerialNumber(this.addSerialNumers).subscribe(data => {
      var status=data["response_code"];
      if(status==200)
      {
        this.dialogbox.close();
        this.service.filter('Register click');
      }
      
    });
  }

  CancelButtonClick(){
    console.log('hai');
    this.dialogbox.close();
  }
}
