import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Batch } from 'src/app/shared/batch';
import { BatchService } from 'src/app/shared/batch.service';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  batId:number;
    batch:Batch=new Batch();

      constructor(public batservice:BatchService,private toastrService: ToastrService,private router :Router,
        private route:ActivatedRoute) { }
    
      ngOnInit(): void {
      
    
      this.batId=this.route.snapshot.params['batId'];
     
        if(this.batId!=0||this.batId!=null){
          this.batservice.getBatch(this.batId).subscribe(
            data=>{
              console.log(data);
              this,this.batservice.formData=data;
               
            this.batservice.formData=Object.assign({},data);
         
            },
            error=>
            console.log(error)
          );
        }
     
      
      }
      onSubmit(form:NgForm){
        console.log(form.value);
        let addId =this.batservice.formData.BatchId;
       
        if(addId==0||addId==null){
           //insert
           form.value.IsActive=true;
          this.insertBatchRecord(form);
        }
        else
        {
          //update
         console.log("update")
         this.updateBatchRecord(form);
        }
      
      }
    
      //reset/clear all content from form  at initialization
      resetform(form?:NgForm){
        if(form!=null){
          form.resetForm();
    
        }
    
      }
    
    
      //insert
      insertBatchRecord(form?:NgForm){
        console.log("inserting a record...");
        this.batservice.insertBatch(form.value).subscribe
        ((result)=>
        {
          console.log(result);
          this.resetform(form);
          this.toastrService.success('Batch record has been inserted','CRM appv2021');
         
        }
        );
        window.alert("Batch record has been inserted");
        window.location.reload();
      }
    
        //update
        updateBatchRecord(form?:NgForm)
        {
          console.log("updating a record...");
          this.batservice.updateBatch(form.value).subscribe
          ((result)=>
          {
            console.log(result);
            this.resetform(form);
            this.toastrService.success('Batch record has been inserted','CRM appv2021');
           this.batservice.bindListBatches();
          }
          );
          window.alert("Batch record has been updated");
          window.location.reload();
    
        
      }
    
    
    }
    
    
    
