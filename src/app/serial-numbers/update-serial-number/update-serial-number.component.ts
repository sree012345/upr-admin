import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SerialNumberService } from 'src/app/services/serial-number.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-serial-number',
  templateUrl: './update-serial-number.component.html',
  styleUrls: ['./update-serial-number.component.css']
})
export class UpdateSerialNumberComponent implements OnInit {

  constructor(public service: SerialNumberService,private dialogbox: MatDialogRef<UpdateSerialNumberComponent>) { }

  ngOnInit(): void {
  }
  addSerialNumberClicked(form: NgForm)
  {
    //console.log(form.value)
   
  }

  CancelButtonClick(){
    console.log('hai');
    this.dialogbox.close();
  }
}
