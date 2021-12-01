import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { Batch } from './batch';

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  //create an instance of batch
  formData:Batch=new Batch();
  
  batches: Batch[];


  constructor(private httpClient: HttpClient) { }



  //insert Batch
  insertBatch(batch:Batch):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/batch",batch)
  }

  //update Batch
  updateBatch(batch:Batch):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/api/batch",batch)
  }
//DELETE
deleteBatch(id: number){
  return this.httpClient.delete(environment.apiUrl +"/api/batch/"+id);
}

//display Batch
  bindListBatches(){
    this.httpClient.get(environment.apiUrl+"/api/batch")
    .toPromise().then(response=>
      this.batches=response as Batch[]);

    
  }

  //get a paticular batch
  getBatch(batId:number):Observable<any>{
  return this.httpClient.get(environment.apiUrl+"/api/batch/"+batId)
  }
}

