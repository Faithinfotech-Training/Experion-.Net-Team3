import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Courseenquiry } from 'src/app/shared/courseenquiry';
import { EnquiryService } from 'src/app/shared/enquiry.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-courseenquiry',
  templateUrl: './courseenquiry.component.html',
  styleUrls: ['./courseenquiry.component.css']
})
export class CourseenquiryComponent implements OnInit {
CourseEnquiryId:number;
courseenquiry:Courseenquiry=new Courseenquiry();
  constructor(public cenqService:EnquiryService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.CourseEnquiryId=this.route.snapshot.params['CourseEnquiryId'];
    
    
    this.cenqService.BindCmbCourses();
    if(this.CourseEnquiryId!=0||(this.CourseEnquiryId!=null))
    {
      this.cenqService.getCourseEnquiry(this.CourseEnquiryId).subscribe(
        data=>{console.log(data);
        var datePipe=new DatePipe("en-UK");
        let formatedDate:any=datePipe.transform(data.CourseEnqiryDate,'yyyy-MM-dd');
        data.CourseEnqiryDate=formatedDate
        this.cenqService.formData=Object.assign({},data);
        },
        error=>console.log(error)
      );
    }
  }

  onSubmit(form:NgForm)
  {
    
    console.log(form.value);
    
    let addId=this.cenqService.formData2.CourseEnquiryId;
  
    if(addId==0 || addId==null)
    {
      this.InsertCourseEnquiryRecord(form);
    }
    else
    {
      console.log("Updating a record..");
      this.UpdateCourseEnquiryRecord(form);
    }
    this.router.navigateByUrl('/leadview');
  }
  resetForm(form?:NgForm){
    if(form != null){
      form.resetForm();
    }
  }

  InsertCourseEnquiryRecord(form:NgForm)
{
 // form.value.LeadId=sessionStorage.getItem('UserId');
 form.value.CourseEnquiryStatus="Pending"
 form.value.CourseEnquiryDate=new Date();
 form.value.LeadId=Number(sessionStorage.getItem("LoginId"));
 if(this.CourseEnquiryId!=0||(this.CourseEnquiryId!=null))
    {
      this.cenqService.getCourseEnquiry(this.CourseEnquiryId).subscribe(
        data=>{console.log(data);
          console.log("hiiii")
        var datePipe=new DatePipe("en-UK");
        let formatedDate:any=datePipe.transform(data.CourseEnquiryDate,'yyyy-MM-dd');
        data.CourseEnquiryDate=formatedDate
        this.cenqService.formData=Object.assign({},data);
        },
        error=>console.log(error)
      );
    }
  console.log("Inserting a record...");
  console.log(form.value);
  this.cenqService.insertCourseenquiry(form.value).subscribe(
    (result)=>{
      console.log(result);
      this.resetForm(form);
    }
  );
 // window.location.reload();
 window.alert("Enquiry submitted successfully");
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
