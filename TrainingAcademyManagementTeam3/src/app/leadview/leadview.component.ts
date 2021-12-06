import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-leadview',
  templateUrl: './leadview.component.html',
  styleUrls: ['./leadview.component.css']
})
export class LeadviewComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router ) { }

  ngOnInit(): void {
  }
  logOut(){
    this.authService.logOut();
    this.router.navigateByUrl('login');
  }

}
