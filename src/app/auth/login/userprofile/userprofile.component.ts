import { FormGroup, Validators , NgForm, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  info='';
  ProfileForm:FormGroup

  constructor(public router:Router, private authService:AuthService) {
    this.authService.user$.subscribe(info => {this.info = info})
  }
  


  ngOnInit() {
    this.ProfileForm = new FormGroup({
      'name': new FormControl(null,[Validators.required]),
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'password': new FormControl(null,[Validators.required,Validators.minLength(6)])

    })
   
  }

  onSave(){
    
  }

}
