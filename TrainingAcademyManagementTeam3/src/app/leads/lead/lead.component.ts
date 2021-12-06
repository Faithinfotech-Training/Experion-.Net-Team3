import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Lead } from 'src/app/shared/lead';
import { LeadService } from 'src/app/shared/lead.service';

@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.css']
})
export class LeadComponent implements OnInit {

  leadId:number;
  lead:Lead=new Lead();

      constructor(public leadService:LeadService,private toastrService: ToastrService,private router :Router,
        private route:ActivatedRoute) { }
    
      ngOnInit(): void {
      
    
      this.leadId=this.route.snapshot.params['leadId'];
     
        if(this.leadId!=0||this.leadId!=null){
          this.leadService.getLead(this.leadId).subscribe(
            data=>{
              console.log(data);
             this.leadService.formData=data;
              //date format
        var datePipe = new DatePipe("en-UK");
        let formatedDate: any = datePipe.transform(data.Dob, 'yyyy-MM-dd');
        data.Dob = formatedDate;
               
            this.leadService.formData=Object.assign({},data);
         
            },
            error=>
            console.log(error)
          );
        }
     
      
      }
      onSubmit(form:NgForm){
        console.log(form.value);
        let addId =this.leadService.formData.LeadId;
       
        if(addId==0||addId==null){
           //insert
          this.insertLeadRecord(form);
          

        }
        else
        {
          //update
         console.log("update")
         this.updateLeadRecord(form);
        }
        this.router.navigateByUrl('/leadview')
      
      }
    
      //reset/clear all content from form  at initialization
      resetform(form?:NgForm){
        if(form!=null){
          form.resetForm();
    
        }
    
      }
    
    
      //insert
      insertLeadRecord(form?:NgForm){
        console.log("inserting a record...");
        form.value.LeadId=Number(sessionStorage.getItem("LoginId"));
        this.leadService.insertLead(form.value).subscribe
        ((result)=>
        {
          console.log(result);
          
          this.resetform(form);
          this.toastrService.success('Personal Details successfully inserted');
         
        }
        );
        window.alert("Personal Details successfully inserted");
       
      }
    
        //update
        updateLeadRecord(form?:NgForm)
        {
          console.log("updating a record...");
          this.leadService.updateLead(form.value).subscribe
          ((result)=>
          {
            console.log(result);
            this.resetform(form);
            this.toastrService.success('lead record has been inserted');
           this.leadService.bindLead();
          }
          );
          window.alert("Lead record has been updated");
          window.location.reload();
    
        
      }
    
    
    }
    
    
    


