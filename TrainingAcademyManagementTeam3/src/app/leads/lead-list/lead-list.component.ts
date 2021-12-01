import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lead } from 'src/app/shared/lead';
import { LeadService } from 'src/app/shared/lead.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})
export class LeadListComponent implements OnInit {

  page:number=1;
  filter:string;
    constructor(public leadService:LeadService,private toastrService:ToastrService,private router :Router) { }
  
    ngOnInit(): void {
      this.leadService.bindLead();
    }
  
  
    //populate form by clicking the column fields
    populateForm(lead:Lead){
      console.log(lead);
      this.leadService.formData=Object.assign({},lead);
     
    }
    //delete course
    deleteLead(id:number){
      console.log("deleting record....");
      if(confirm('Are yo sure to DELETE this record?')){}
        this.leadService.deleteLead(id).subscribe(
          (result)=>{
            console.log(result);
            this.leadService.bindLead();
            this.toastrService.success('Lead record has been deleted');
         
          },
          (error)=>{
            console.log(error);
         
          });
      }
  
  //update a course
  updateLead(leadId:number)
  {
    console.log(leadId);
      this.router.navigate(['lead',leadId])
    
  }
  }
  
  