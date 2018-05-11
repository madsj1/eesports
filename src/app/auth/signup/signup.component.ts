import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;


  constructor(private authService: AuthService ) { }
  

  ngOnInit() {
    this.signupForm = new FormGroup({
     /*  'email': new FormControl(null, [Validators.required,Validators.email], this.forbiddenEmails), */
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'password': new FormControl(null,[Validators.required,Validators.minLength(6)])
    });
  }

  onSignup(){
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    this.authService.signupUser(email,password);
    console.log("user created");
  }
/*   forbiddenEmails(control:FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject)=>{
      setTimeout(()=>{
      
        if (control.value === this.signupForm){
          resolve({'emailIsForbidden':true});
        }else{
          resolve(null);
        }
      },1500);
    });
    return promise; 
  } */

}
