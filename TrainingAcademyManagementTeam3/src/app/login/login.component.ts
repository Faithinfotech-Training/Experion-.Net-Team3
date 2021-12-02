import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/user';
import { AuthService } from '../shared/auth.service';
import { Jwtresponse } from '../shared/jwtresponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //decalre variables
  loginForm!: FormGroup;
  isSubmitted = false;
  loginUser: User = new User();
  error = '';
  jwtResponse: any = new Jwtresponse;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    //FormGroup

    this.loginForm = this.formBuilder.group(
      {
        UserName: ['', [Validators.required, Validators.minLength(2)]],
        UserPassword: ['', [Validators.required]]

      }
    );

  }
  //get controls
  get formControls() {
    return this.loginForm.controls;
  }

  //login verify credentials
  loginCredentials() {
    //valid or invalid
    this.isSubmitted = true;
    console.log(this.loginForm.value);

    //invalid
    if (this.loginForm.invalid) 
      return;
    

    //valid
    if (this.loginForm.valid) {
      //calling method from Authservice -Authorization
      this.authService.loginVerify(this.loginForm.value).subscribe(data => {
        console.log(data);
        //token with rolid and name
        this.jwtResponse = data;

        //either in local or session
        sessionStorage.setItem("jwtToken", this.jwtResponse.token);

        //check the role -- based on it redirect our application
        if (this.jwtResponse.RoleId === 1) {
          //logged as Admin
          console.log("Admin");
          localStorage.setItem("username", this.jwtResponse.UserName);
          localStorage.setItem("ACCESS_ROLE", this.jwtResponse.RoleId.toString());
          sessionStorage.setItem("username", this.jwtResponse.UserName);
          this.router.navigateByUrl('/admin');
        }
        else if (this.jwtResponse.RoleId === 2) {
          //logged as manager
          console.log("Manager");
          localStorage.setItem("username", this.jwtResponse.UserName);
          localStorage.setItem("ACCESS_ROLE", this.jwtResponse.RoleId.toString());
          sessionStorage.setItem("username", this.jwtResponse.UserName);
          this.router.navigateByUrl('/manager');
        }
        else if (this.jwtResponse.RoleId === 3) {
          //logged as Co-ordinator
          console.log("Co-ordinator");
          localStorage.setItem("username", this.jwtResponse.UserName);
          localStorage.setItem("ACCESS_ROLE", this.jwtResponse.RoleId.toString());
          sessionStorage.setItem("username", this.jwtResponse.UserName);
          this.router.navigateByUrl('/co-ordinator');
        }
        else if (this.jwtResponse.RoleId === 4) {
          //logged as lead
          console.log("Lead");
          localStorage.setItem("username", this.jwtResponse.UserName);
          localStorage.setItem("ACCESS_ROLE", this.jwtResponse.RoleId.toString());
          sessionStorage.setItem("username", this.jwtResponse.UserName);
          sessionStorage.setItem("LoginId", this.jwtResponse.LoginId);
          this.router.navigateByUrl('/leadView');
        }
        else {
          this.error = "sorry.. Invalid authorized role..This module is not authorized"
        }
      },
        errors => {
          this.error = "Invalid user name or password.. try again.."
        });


    }

  }



}

