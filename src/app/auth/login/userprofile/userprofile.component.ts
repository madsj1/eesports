import { FormGroup, Validators , NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/auth.service';
import { UsersService } from '../../../shared/users.service';
import { Profile } from '../../../shared/profile.model';



@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  info='';

  userlist:Profile[];
  constructor(public router:Router, private authService:AuthService, private usersSrv:UsersService) {
    /* this.authService.user$.subscribe(info => {this.info = info}) */
  }
  


  ngOnInit() {
    var data = this.usersSrv.getData();
    data.snapshotChanges().subscribe(item =>{
      this.userlist = [];
      item.forEach(element =>{
        var y = element.payload.toJSON();
        y["user.uid"] = element.key;
        this.userlist.push(y as Profile);
      });
    })
  }

  

  onSave(form:NgForm){
    if(this.authService.isAuthenticated){
      this.usersSrv.insertUserProfile(form.value)
    }
      
  }

}
