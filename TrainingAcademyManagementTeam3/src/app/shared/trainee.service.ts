
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trainee } from './trainee';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {

  
  //create an instance of course
  formData:Trainee=new Trainee();
 
  trainees: Trainee[];
  
  constructor(private httpClient: HttpClient) { }



  //insert trainee
  insertTrainee(trainee:Trainee):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/trainee",trainee)
  }

  //update trainee
  updateTrainee(trainee:Trainee):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/api/trainee",trainee)
  }
//DELETE
deleteTrainee(id: number){
  return this.httpClient.delete(environment.apiUrl +"/api/trainee/"+id);
}

//display trainee
  bindListTrainee(){
    this.httpClient.get(environment.apiUrl+"/api/trainee")
    .toPromise().then(response=>
      this.trainees=response as Trainee[]);

    
  }

  //get a paticular course
  getTrainee(trId:number):Observable<any>{
  return this.httpClient.get(environment.apiUrl+"/api/trainee/"+trId)
  }

  
}


