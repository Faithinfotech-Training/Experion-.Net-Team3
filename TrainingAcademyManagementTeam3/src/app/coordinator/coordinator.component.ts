import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.css']
})
export class CoordinatorComponent implements OnInit {

  loggedUserName: string;
  constructor(private authService:AuthService,private router:Router ) { }

  ngOnInit(): void {this.loggedUserName = localStorage.getItem("username");
  this.loggedUserName.toUpperCase();
  }
  logOut(){
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }
  
}
