import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsersService 
{
  signupEndPoint : any = "http://localhost:5129/api/UserApi/signup";
  signinEndPoint: any = "http://localhost:5129/api/UserApi/signin";

  constructor(private httpClient : HttpClient) { }

  // GetUsersList() : Observable<any>
  // {
  //   return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  // }

  SignUpUser(PostObj : any) : Observable<any>
  {
    return this.httpClient.post(this.signupEndPoint, PostObj);
  }

  SignInUser(PostObj : any) : Observable<any>
  {
    return this.httpClient.post(this.signinEndPoint, PostObj);
  }

  Func2GetSessionStorage() : any
  {
    return sessionStorage.getItem("User");
  }

}
