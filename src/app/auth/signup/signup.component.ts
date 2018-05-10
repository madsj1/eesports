import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
/*   emailAlreadyUsed = ['dovydastt@gmail.com']; */

  constructor(private authService: AuthService ) { }
  

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required,Validators.email/* , this.forbiddenEmails.bind(this)] */),
      'password': new FormControl(null,[Validators.required,Validators.minLength(6)])
    });
  }

  onSignup(){
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    this.authService.signupUser(email,password);
    console.log("user created");
  }
/* CUSTOM VALIDATOR METHOD
  forbiddenEmails(control:FormControl):{[s:string]:boolean}{
    if(this.emailAlreadyUsed.indexOf(control.value) !== -1){
      return {'EmailIsUsed':true}
    }
    return null;
  } */

}
