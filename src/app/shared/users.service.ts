import { Injectable } from "@angular/core";
import { Profile } from "./profile.model";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable()
export class UsersService {

    UserList: AngularFireList<any>;

    selectedUser: Profile = new Profile();
    constructor(private firebase: AngularFireDatabase) {}

    getData() {
        this.UserList = this.firebase.list("users/");
        return this.UserList;
      }

      insertUserProfile(user: Profile) {
        this.UserList.push({
          name: user.name,
          email: user.email
        });
      }
    
      updateUserProfile(user:Profile){
          
          this.UserList.update(user.uid,{
            name: user.name,
            email: user.email
          });
      }

}
