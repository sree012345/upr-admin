import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SignUp } from 'src/app/models/Login-model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  message: string;

  signUpData:SignUp=new SignUp();
  constructor(public dialogz:MatDialog) { }
  visible:boolean=false;
  ngOnInit(): void {
  }
  submit(form: NgForm){
    
    this.signUpData.country="india";
    console.log(this.signUpData);
  }
  cancel(){
    this.dialogz.closeAll()
  }
  toggleVisibility(e){
    this.visible=e.target.checked;
    console.log(this.visible);
      }
}
