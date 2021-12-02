import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EnquiryService } from 'src/app/shared/enquiry.service';
@Component({
  selector: 'app-editresourceenquiry',
  templateUrl: './editresourceenquiry.component.html',
  styleUrls: ['./editresourceenquiry.component.css']
})
export class EditresourceenquiryComponent implements OnInit {
  ResourceEnquiryId:number;
  constructor(public renqService:EnquiryService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.ResourceEnquiryId=this.route.snapshot.params['ResourceEnquiryId'];
  }
  onSubmit(form:NgForm)
  {
    this.UpdateResourceEnquiryRecord(form);
  }
  resetForm(form?:NgForm){
    if(form != null){
      form.resetForm();
    }
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
