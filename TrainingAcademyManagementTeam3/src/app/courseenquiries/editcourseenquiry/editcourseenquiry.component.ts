import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnquiryService } from 'src/app/shared/enquiry.service';

@Component({
  selector: 'app-editcourseenquiry',
  templateUrl: './editcourseenquiry.component.html',
  styleUrls: ['./editcourseenquiry.component.css']
})
export class EditcourseenquiryComponent implements OnInit {
CourseEnquiryId:number;

  constructor(public cenqService:EnquiryService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.CourseEnquiryId=this.route.snapshot.params['CourseEnquiryId'];
  }
  onSubmit(form:NgForm)
  {
    this.UpdateCourseEnquiryRecord(form);
  }
  resetForm(form?:NgForm){
    if(form != null){
      form.resetForm();
    }
  }
  UpdateCourseEnquiryRecord(form:NgForm)
  {
    this.cenqService.updateCourseenquiry(form.value).subscribe(
      (result)=>{
        console.log(result);
        this.resetForm(form);
      }
    );
    window.location.reload();
  
  }
}
