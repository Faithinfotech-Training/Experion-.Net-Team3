import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient:HttpClient,private router:Router) { }

  // get a user by password

  /*GetUserByPassword(user:User):Observable<any>{
    console.log(user.UserName);
    console.log(user.UserPassword);
    return this.httpclient.get(environment.apiUrl+"api/login/"+user.UserName+"/"+user.UserPassword);
    
  }*/

  public loginVerify(user:User):Observable<any>{

    console.log("Token generation")
    
   return this.httpclient.get(environment.apiUrl+"/api/login/"+user.UserName+"/"+user.UserPassword);

  }
  //logout
  public logOut(){
    localStorage.removeItem('username');
    localStorage.removeItem('ACCESS_ROLE');
    sessionStorage.removeItem('username');
  }
}
