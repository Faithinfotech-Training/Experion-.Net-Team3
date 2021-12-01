import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resource } from './resource';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  //create an instance of course
  formData:Resource=new Resource();
  
  resources: Resource[];


  constructor(private httpClient: HttpClient) { }



  //insert e
  insertResource(resource:Resource):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/resource",resource)
  }

  //update Course
  updateResource(resource:Resource):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/api/resource",resource)
  }
//DELETE
deleteResource(id: number){
  return this.httpClient.delete(environment.apiUrl +"/api/resource/"+id);
}

//display Course
  bindListResources(){
    this.httpClient.get(environment.apiUrl+"/api/resource")
    .toPromise().then(response=>
      this.resources=response as Resource[]);

    
  }

  //get a paticular 
  getResource(resId:number):Observable<any>{
  return this.httpClient.get(environment.apiUrl+"/api/resource/"+resId)
  }
}
