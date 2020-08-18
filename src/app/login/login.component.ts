import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminloginService } from '../services/Adminlogin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message="Your email or password is wrong please check..!"
  name:boolean=true;
  remember: any;
  constructor(public service:AdminloginService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    
    this.service.adminlogin(form.value).subscribe((res) => {
      var status = res["response_code"];
      console.log(status)
      if(status!=200){
         this.name=false;
        console.log(status)
      this.message=res["response_message"]
      console.log(this.message)
      }else{
        
      }
      console.log(res);
    })
  }

  toggleVisibility(e) {
    this.remember = e.target.checked;
    localStorage.setItem("rememberMe", JSON.stringify(this.remember));
    localStorage.setItem("NewrememberMe", JSON.stringify(this.remember));
   
  }
}