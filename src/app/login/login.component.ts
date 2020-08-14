import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminloginService } from '../services/Adminlogin.service';
import { SerialNumber } from '../models/serialNumber-model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData=new SerialNumber();
  constructor(public service:AdminloginService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    this.service.adminlogin(form.value).subscribe((res) => {
      console.log(res);
    })
  }
}
