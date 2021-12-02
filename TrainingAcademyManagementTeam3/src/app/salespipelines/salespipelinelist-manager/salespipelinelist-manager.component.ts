import { Component, OnInit } from '@angular/core';
import { SalesPipelineService } from 'src/app/shared/salespipeline.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {SalesPipeline} from 'src/app/shared/salespipeline';
import { LeadService } from 'src/app/shared/lead.service';
import { LeadsComponent } from 'src/app/leads/leads.component';

@Component({
  selector: 'app-salespipelinelist-manager',
  templateUrl: './salespipelinelist-manager.component.html',
  styleUrls: ['./salespipelinelist-manager.component.css']
})
export class SalespipelinelistManagerComponent implements OnInit {
  page:number=1;
  filter:string;
  constructor(public salespipelineService:SalesPipelineService,public leadService:LeadService,private toastrService:ToastrService,private router :Router) { }

  ngOnInit(): void {
    this.salespipelineService.bindListSalesPipelines();
    this.leadService.bindLead();
  }
  showLead(LId){
    let LName = this.leadService.leads.find(o => o.LeadId === LId).LeadName;
    return LName;
  }

}