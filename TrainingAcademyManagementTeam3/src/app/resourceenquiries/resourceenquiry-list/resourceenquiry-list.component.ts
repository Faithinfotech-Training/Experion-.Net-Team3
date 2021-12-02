import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnquiryService } from 'src/app/shared/enquiry.service';
import { Resourceenquiry } from 'src/app/shared/resourceenquiry';
@Component({
  selector: 'app-resourceenquiry-list',
  templateUrl: './resourceenquiry-list.component.html',
  styleUrls: ['./resourceenquiry-list.component.css']
})
export class ResourceenquiryListComponent implements OnInit {
  page:number=1;
  filter:string;
  constructor(public renqService:EnquiryService,private router : Router) { }

  ngOnInit(): void {
    this.renqService.bindListResourceEnquiries();
  }

  populateForm(enq:Resourceenquiry)
  {
    console.log(enq);
    
    //date format
    var datePipe= new DatePipe("en-UK");
    let formatedDate:any=datePipe.transform(enq.ResourceEnquiryDate,'yyyy-MM-dd');
    enq.ResourceEnquiryDate=formatedDate
    console.log(enq.ResourceEnquiryDate);
    this.renqService.formData=Object.assign({},enq);
  }
  deleteResourceEnquiry(id:number)
  {
    if(confirm("Are you sure you want to delete?"))
    {
      console.log("Deleting a record...");
    this.renqService.deleteResourceenquiry(id).subscribe(
      (result)=>
      {
        console.log(result);
        this.renqService.bindListResourceEnquiries();
      },
      (error)=>
      {
        console.log(error);
      }
    );
    }
  }

}
