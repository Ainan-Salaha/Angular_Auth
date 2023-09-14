import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl= 'http://localhost:8080/api/register'
  private _loginUrl= 'http://localhost:8080/api/login'
  logedInUserName: String = '';

  constructor(
    private http : HttpClient,
    private router:Router
  ) { }

 
  registerUser(user :User):Observable<any>{
    return this.http.post<any>(this._registerUrl , user)
  }
  
  loginUser(user:User){
    return this.http.post<any>(this._loginUrl , user)
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  logoutUser(){
    this.router.navigate(['/login'])
    this.logedInUserName='';
    return localStorage.removeItem("token")
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
interface  User{
  name?:string,
  email:string,
  password:string
}