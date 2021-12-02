import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Courseenquiry } from 'src/app/shared/courseenquiry';
import { EnquiryService } from 'src/app/shared/enquiry.service';

@Component({
  selector: 'app-courseenquirylist',
  templateUrl: './courseenquirylist.component.html',
  styleUrls: ['./courseenquirylist.component.css']
})
export class CourseenquirylistComponent implements OnInit {

  page:number=1;
  filter:string;

  constructor(public cenqService:EnquiryService,private router : Router) { }


  ngOnInit(): void {
    this.cenqService.bindListCourseEnquiries();
  }
  populateForm(enq:Courseenquiry)
  {
    console.log(enq);
    //date format
    var datePipe= new DatePipe("en-UK");
    let formatedDate:any=datePipe.transform(enq.CourseEnquiryDate,'yyyy-MM-dd');
    enq.CourseEnquiryDate=formatedDate
    this.cenqService.formData2=Object.assign({},enq);
  }

  deleteCourseEnquiry(id:number)
  {
    if(confirm("Are you sure you want to delete?"))
    {
      console.log("Deleting a record...");
    this.cenqService.deleteCourseenquiry(id).subscribe(
      (result)=>
      {
        console.log(result);
        this.cenqService.bindListCourseEnquiries();
      },
      (error)=>
      {
        console.log(error);
      }
    );
    }
  }

  updateEmployee(Id:number)
  {
    console.log(Id);
    this.router.navigate(['editcourseenquiry',Id])
  }


}
