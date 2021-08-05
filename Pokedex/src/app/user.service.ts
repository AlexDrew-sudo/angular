import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './Models/usermodel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUser: User;
  newActiveUser$: Subject<User> = new Subject<User>();

  constructor() { }

  setActiveUser(user: User) {
    this.activeUser = user;
    this.newActiveUser$.next(this.activeUser)
    
  }

  getActiveUser(): User {

    return this.activeUser
  }
  logout(){
    this.activeUser=null
    this.newActiveUser$.next(null)
   
  }
  updateFromSQL(){

  }
}
