import { Component, NgModule, OnInit } from '@angular/core';
import { Resourceenquiry } from 'src/app/shared/resourceenquiry';
import {EnquiryService} from 'src/app/shared/enquiry.service' 
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-resourceenquiry',
  templateUrl: './resourceenquiry.component.html',
  styleUrls: ['./resourceenquiry.component.css']
})
export class ResourceenquiryComponent implements OnInit {
  ResourceEnquiryId:number;
  resourceenquiry:Resourceenquiry=new Resourceenquiry();
  constructor(public renqService:EnquiryService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.ResourceEnquiryId=this.route.snapshot.params['ResourceEnquiryId'];
    
    
    this.renqService.BindCmbResources();
    if(this.ResourceEnquiryId!=0||(this.ResourceEnquiryId!=null))
    {
      this.renqService.getResourceEnquiry(this.ResourceEnquiryId).subscribe(
        data=>{console.log(data);
        var datePipe=new DatePipe("en-UK");
        let formatedDate:any=datePipe.transform(data.ResourceEnqiryDate,'yyyy-MM-dd');
        data.ResourceEnqiryDate=formatedDate
        this.renqService.formData=Object.assign({},data);
        },
        error=>console.log(error)
      );
    }
  }

  
    

  onSubmit(form:NgForm)
  {
    this.renqService.formData.ResourceEnquiryDate=new Date();
    this.renqService.formData.LeadId=99;
    this.renqService.formData.ResourceEnquiryStatus="pending";
    console.log(form.value);
    
    let addId=this.renqService.formData.ResourceEnquiryId;
  
    if(addId==0 || addId==null)
    {
      this.InsertResourceEnquiryRecord(form);
    }
    else
    {
      console.log("Updating a record..");
      this.UpdateResourceEnquiryRecord(form);
    }
  }
  resetForm(form?:NgForm){
    if(form != null){
      form.resetForm();
    }
  }
InsertResourceEnquiryRecord(form:NgForm)
{
 // form.value.LeadId=sessionStorage.getItem('UserId');
 form.value.ResourceEnquiryStatus="Pending"
 form.value.ResourceEnquiryDate=new Date();
 form.value.LeadId=2;
 if(this.ResourceEnquiryId!=0||(this.ResourceEnquiryId!=null))
    {
      this.renqService.getResourceEnquiry(this.ResourceEnquiryId).subscribe(
        data=>{console.log(data);
          console.log("hiiii")
        var datePipe=new DatePipe("en-UK");
        let formatedDate:any=datePipe.transform(data.ResourceEnqiryDate,'yyyy-MM-dd');
        data.ResourceEnqiryDate=formatedDate
        this.renqService.formData=Object.assign({},data);
        },
        error=>console.log(error)
      );
    }
  console.log("Inserting a record...");
  console.log(form.value);
  this.renqService.insertResourceenquiry(form.value).subscribe(
    (result)=>{
      console.log(result);
      this.resetForm(form);
    }
  );
 // window.location.reload();
}
UpdateResourceEnquiryRecord(form:NgForm)
{
  this.renqService.updateResourceenquiry(form.value).subscribe(
    (result)=>{
      console.log(result);
      this.resetForm(form);
    }
  );
  window.location.reload();

}
  

}
