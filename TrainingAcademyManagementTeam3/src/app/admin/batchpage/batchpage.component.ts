import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-batchpage',
  templateUrl: './batchpage.component.html',
  styleUrls: ['./batchpage.component.css']
})
export class BatchpageComponent implements OnInit {

  loggedUserName: string;
  constructor(private authService:AuthService,private router:Router ) { }

  ngOnInit(): void {
    this.loggedUserName = localStorage.getItem("username");
    this.loggedUserName=this.loggedUserName.toUpperCase();
  }

}
