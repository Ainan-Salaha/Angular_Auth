import { Component , OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{

  registerUserData:any={};
 
  constructor(
    private auth : AuthService,
    private router: Router

  ) {}

  ngOnInit(): void {
    
  }
  registerUser(){
    this.auth.registerUser(this.registerUserData).subscribe(
      res => {
        console.log(res);
        this.auth.logedInUserName=res.user.name;
        localStorage.setItem('token',res.token)
        alert(res.message)
        this.router.navigate(['/login']);
      },
      error => {
        console.log("Error", error);
      }
    );
   
  }
  
 
  
}

