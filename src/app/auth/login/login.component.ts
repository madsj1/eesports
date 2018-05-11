import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
  constructor(private authservice:AuthService) { }

  ngOnInit() {
      this.loginForm = new FormGroup({
        'email': new FormControl(null, [Validators.required,Validators.email]),
        'password': new FormControl(null,[Validators.required,Validators.minLength(6)])
      });

    
  }

 onLogin(form:NgForm){
  const email = this.loginForm.value.email;
  const password = this.loginForm.value.password;
  this.authservice.LoginUser(email,password);
  this.authservice.getUserData();
 }

 retrieveData(){
       

}



}
