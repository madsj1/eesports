import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../shared/auth.service';
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
  forbiddenUserEmails = ['dovydastt@gmail.com','anonimas@gmail.com']

  

  

  ngOnInit() {
    this.signupForm = new FormGroup({
      /* 'email': new FormControl(null, [Validators.required,Validators.email], this.forbiddenEmails), */
      'email': new FormControl(null, [Validators.required,Validators.email, this.forbiddenEmails.bind(this)]/* , this.forbiddenEmails */),
      'password': new FormControl(null,[Validators.required,Validators.minLength(6)])
    });


  }

  onSignup(){
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    this.authService.signupUser(email,password);
    this.signupForm.reset();
  }

  forbiddenEmails(control:FormControl):{[s:string]:boolean}{
    if(this.forbiddenUserEmails.indexOf(control.value) !== -1){
      return {'emailIsForbidden':true};
    }
    return null;
  }

/* 
  forbiddenEmails(control:FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject)=>{
      setTimeout(()=>{
      
        if (control.value === 'dovydastt@gmail.com'){
          resolve({'emailIsForbidden':true});
        }else{
          resolve(null);
        }
      },1500);
    });
    return promise; 
  }
 */
}
