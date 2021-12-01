import { Component, OnInit } from '@angular/core';
import { BatchService } from 'src/app/shared/batch.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Batch } from 'src/app/shared/batch';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent implements OnInit {

  page:number=1;
filter:string;
  constructor(public batchService:BatchService,private toastrService:ToastrService,private router :Router) { }

  ngOnInit(): void {
    this.batchService.bindListBatches();
  }


  //populate form by clicking the column fields
  populateForm(bat:Batch){
    console.log(bat);
    this.batchService.formData=Object.assign({},bat);
   
  }
  //delete batch
  deleteBatch(id:number){
    console.log("deleting record....");
    if(confirm('Are yo sure to DELETE this record?')){}
      this.batchService.deleteBatch(id).subscribe(
        (result)=>{
          console.log(result);
          this.batchService.bindListBatches();
          this.toastrService.success('Batch record has been deleted','TrainingApp v2021');
       
        },
        (error)=>{
          console.log(error);
       
        });
    }

//update a batch
updateBatch(batId:number)
{
  console.log(batId);
    this.router.navigate(['batch',batId])
  
}
}

