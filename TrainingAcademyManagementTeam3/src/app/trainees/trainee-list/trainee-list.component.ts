import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TraineeviewService } from 'src/app/shared/traineeview.service';

@Component({
  selector: 'app-trainee-list',
  templateUrl: './trainee-list.component.html',
  styleUrls: ['./trainee-list.component.css']
})
export class TraineeListComponent implements OnInit {

 //assign default page number
 page: number = 1;
 filter: string;
 constructor(public traineeviewService: TraineeviewService, private toxterService: ToastrService, private router: Router) { }

 ngOnInit(): void {
   this.traineeviewService.bindtraineeview();
 }
}