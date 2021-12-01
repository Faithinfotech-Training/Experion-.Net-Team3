import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Resource} from 'src/app/shared/resource';
import { ResourceService } from 'src/app/shared/resource.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {

  page:number=1;
filter:string;
  constructor(public resourceService:ResourceService,private toastrService:ToastrService,private router :Router) { }

  ngOnInit(): void {
    this.resourceService.bindListResources();
  }


  //populate form by clicking the column fields
  populateForm(res:Resource){
    console.log(res);
    this.resourceService.formData=Object.assign({},res);
   
  }
  //delete 
  deleteResource(id:number){
    console.log("deleting record....");
    if(confirm('Are yo sure to DELETE this record?')){
      this.resourceService.deleteResource(id).subscribe(
        (result)=>{
          console.log(result);
          this.resourceService.bindListResources();
          this.toastrService.success('Resource record has been deleted','TrainingApp v2021');
       
        },
        (error)=>{
          console.log(error);
       
        });
    }}

//update 
updateResource(resId:number)
{
  console.log(resId);
    this.router.navigate(['resource',resId])
  
}
}
