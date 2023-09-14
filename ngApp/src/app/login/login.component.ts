import { Component , OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginUserData:any={}
  constructor(
    private auth : AuthService,
    private router: Router

  ) {}

  ngOnInit(): void {
    
  }
  loginUser(){
    this.auth.loginUser(this.loginUserData).subscribe(
      res => {
        console.log(res);
        this.auth.logedInUserName=res.userDetails.name;
        localStorage.setItem('token',res.token)
        this.router.navigate(['/special']);
      },
      error => {
        console.log("Error", error);
      }
    )
  }

}
