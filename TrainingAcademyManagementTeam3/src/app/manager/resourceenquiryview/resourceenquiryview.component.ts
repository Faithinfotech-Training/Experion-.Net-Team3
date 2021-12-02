import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResourceenquiryviewService } from 'src/app/shared/resourceenquiryview.service';

@Component({
  selector: 'app-resourceenquiryview',
  templateUrl: './resourceenquiryview.component.html',
  styleUrls: ['./resourceenquiryview.component.css']
})
export class ResourceenquiryviewComponent implements OnInit {

  page: number = 1;

  filter: string;

  constructor(public resourceenquiryviewService: ResourceenquiryviewService, private toastrService: ToastrService, private router: Router) { }



  ngOnInit(): void {

    this.resourceenquiryviewService.bindresourceenquiryview();

  }



}

