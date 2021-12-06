import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Traineeview} from './traineeview';


@Injectable({
  providedIn: 'root'
})
export class TraineeviewService {

  formData:Traineeview=new Traineeview();
  
  traineeviews: Traineeview[];


  constructor(private httpClient: HttpClient) { }


//display courseenquiryview
  bindtraineeview(){
    this.httpClient.get(environment.apiUrl+"/api/trainee/getalltrainee")
    .toPromise().then(response=>
      this.traineeviews = response as Traineeview[]);
   
  }

  
}

