import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Trainee } from 'src/app/shared/trainee';
import { TraineeService } from 'src/app/shared/trainee.service';

@Component({
  selector: 'app-traineedit',
  templateUrl: './traineedit.component.html',
  styleUrls: ['./traineedit.component.css']
})
export class TraineeditComponent implements OnInit {
   
    //assign default page number
    page: number = 1;
    filter: string;
    constructor(public traineeService: TraineeService, private toxterService: ToastrService, private router: Router) { }
  
    ngOnInit(): void {
      this.traineeService.bindListTrainee();
    }
    //populate form by clicking the column fields
    populateForm(bt: Trainee) {
      console.log(bt);
      this.traineeService.formData = Object.assign({}, bt);
      
    }
  
    //delete trainee
    deleteTrainee(id: number) {
  
  
      console.log("Deleting a record...");
      if (confirm('Are you sure to Delete this reord')) {
        this.traineeService.deleteTrainee(id).subscribe(
          (result) => {
            console.log("result" + result);
            
            this.toxterService.success('Trainee details Updated!', 'succes!');
  
          }, (error) => {
            console.log(error);
          }
        );
        window.location.reload();
      }
  
  
  
    }
  
    //update an Trainee
    updateTrainee(trId: number){
      console.log(trId);
      this.router.navigate(['trainee',trId]);
    }
  }
  
