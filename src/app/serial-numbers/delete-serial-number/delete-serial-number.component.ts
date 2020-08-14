import { Component, OnInit, Inject } from '@angular/core';
import { SerialNumberService } from 'src/app/services/serial-number.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-serial-number',
  templateUrl: './delete-serial-number.component.html',
  styleUrls: ['./delete-serial-number.component.css']
})
export class DeleteSerialNumberComponent implements OnInit {
  serial_id: any;

  constructor(private router: Router, public service: SerialNumberService,@Inject(MAT_DIALOG_DATA) public data: any,public dialogz:MatDialog) { 
    this.serial_id = this.data.serial_id;
    console.log(this.serial_id)
  }

  ngOnInit(): void {
  }
  delete(){
    this.service.deleteSerialNumber(this.serial_id).subscribe(data => {
      
      console.log(data);
      this.service.filter('Register click');
    
      
    })
    }
    cancel(){
      this.dialogz.closeAll()
    }
}
