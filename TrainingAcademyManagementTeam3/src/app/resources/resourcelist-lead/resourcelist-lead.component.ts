import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Resource} from 'src/app/shared/resource';
import { ResourceService } from 'src/app/shared/resource.service';

@Component({
  selector: 'app-resourcelist-lead',
  templateUrl: './resourcelist-lead.component.html',
  styleUrls: ['./resourcelist-lead.component.css']
})
export class ResourcelistLeadComponent implements OnInit {

  page:number=1;
  filter:string;
  constructor(public resourceService:ResourceService,private toastrService:ToastrService,private router :Router) { }

  ngOnInit(): void {
    this.resourceService.bindListResources();
  }
}