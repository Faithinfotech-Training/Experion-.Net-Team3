import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Resource } from 'src/app/shared/resource';
import { ResourceService } from 'src/app/shared/resource.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  resId:number;
  resource:Resource=new Resource();

    constructor(public resservice:ResourceService,private toastrService: ToastrService,private router :Router,
      private route:ActivatedRoute) { }
  
    ngOnInit(): void {
    
  
    this.resId=this.route.snapshot.params['resId'];
   
      if(this.resId!=0||this.resId!=null){
        this.resservice.getResource(this.resId).subscribe(
          data=>{
            console.log(data);
            this.resservice.formData=data;
             
          this.resservice.formData=Object.assign({},data);
       
          },
          error=>
          console.log(error)
        );
      }
   
    
    }
    onSubmit(form:NgForm){
      console.log(form.value);
      let addId =this.resservice.formData.ResourceId;
     
      if(addId==0||addId==null){
         //insert
        this.insertResourceRecord(form);
      }
      else
      {
        //update
       console.log("update")
       this.updateResourceRecord(form);
      }
    
    }
  
    //reset/clear all content from form  at initialization
    resetform(form?:NgForm){
      if(form!=null){
        form.resetForm();
  
      }
  
    }
  
  
    //insert
    insertResourceRecord(form?:NgForm){
      console.log("inserting a record...");
      this.resservice.insertResource(form.value).subscribe
      ((result)=>
      {
        console.log(result);
        this.resetform(form);
        this.toastrService.success('Resource record has been inserted','CRM appv2021');
       
      }
      );
      window.alert("Resource record has been inserted");
      window.location.reload();
    }
  
      //update
      updateResourceRecord(form?:NgForm)
      {
        console.log("updating a record...");
        this.resservice.updateResource(form.value).subscribe
        ((result)=>
        {
          console.log(result);
          this.resetform(form);
          this.toastrService.success('Resource record has been inserted','CRM appv2021');
         this.resservice.bindListResources();
        }
        );
        window.alert("Resource record has been updated");
        window.location.reload();
  
      
    }
  
  
  }
