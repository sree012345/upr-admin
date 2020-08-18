import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popupmessage',
  templateUrl: './popupmessage.component.html',
  styleUrls: ['./popupmessage.component.css']
})
export class PopupmessageComponent implements OnInit {
  message:string;
  constructor(private dialogRef:MatDialogRef<PopupmessageComponent>,private dialog:MatDialog,  @Inject(MAT_DIALOG_DATA) public data: any) {
    this.message=this.data.message;
   }
   confirmDialog(){
     this.dialog.closeAll();
   }
  ngOnInit(): void {
  }

}
