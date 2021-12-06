import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TraineeService } from 'src/app/shared/trainee.service';
import { BatchService } from 'src/app/shared/batch.service';
import { Trainee } from 'src/app/shared/trainee';

@Component({
  selector: 'app-trainee',
  templateUrl: './trainee.component.html',
  styleUrls: ['./trainee.component.css']
})
export class TraineeComponent implements OnInit {

  trId:number;
  trainee: Trainee = new Trainee();
  constructor(public traineeService: TraineeService,public batchService: BatchService,private toxterService: ToastrService, private router :Router, 
    private route :ActivatedRoute  ) { }

  ngOnInit(): void {
    //this.resetform();
    this.batchService.bindListBatches();


    //get trId from Activated route
    this.trId = this.route.snapshot.params['trId'];

    if (this.trId !=0 || (this.trId!=null)) {
    
    //gettrainee
    this.traineeService.getTrainee(this.trId).subscribe(
      data => {
        console.log(data);
        
      },
      error => console.log(error)
    );
    }
  }
  onSubmit(form: NgForm) {

    console.log(form.value);
    let addId=this.traineeService.formData.TraineeId;
//insert

if(addId==0||addId==null)
{
  form.value.IsActive = true;
  this.insertTrainee(form);
  //window.location.reload();

}
//update
else{

  console.log("update");
  this.updateTrainee(form);

}


  }

  //clear all content at initialisation

  resetform(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

//insert trainee
insertTrainee(form?:NgForm)
{
  console.log("inserting trainee...")
  this.traineeService.insertTrainee(form.value).subscribe(
    (result)=>
    {
      console.log("result"+result);
      this.resetform(form);
      this.toxterService.success('Trainee details Inserted!', 'succes!');
    }
  );
  this.router.navigate(['traineedit']);
}
//update trainee

updateTrainee(form?:NgForm)
{
  console.log("updating employee...")
  this.traineeService.updateTrainee(form.value).subscribe(
    (result)=>
    {
      console.log("result"+result);
      this.resetform(form);
      this.toxterService.success('trainee details Updated!', 'succes!');
      
    }
  );
 this.router.navigate(['traineedit']);
}
}


