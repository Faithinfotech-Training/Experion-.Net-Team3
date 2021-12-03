import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lead} from './lead';


@Injectable({
  providedIn: 'root'
})
export class LeadService {//create an instance of lead
  
  formData:Lead=new Lead();
  
  leads: Lead[];


  constructor(private httpClient: HttpClient) { }



  //insert lead
  insertLead(lead:Lead):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/lead",lead)
  }

  //update lead
  updateLead(lead:Lead):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/api/lead",lead)
  }
//DELETE
deleteLead(id: number){
  return this.httpClient.delete(environment.apiUrl +"/api/lead/"+id);
}

//display lead
  bindLead(){
    this.httpClient.get(environment.apiUrl+"/api/lead")
    .toPromise().then(response=>
      this.leads = response as Lead[]);
   
  }

  //get a paticular lead
  getLead(id:number):Observable<any>{
  return this.httpClient.get(environment.apiUrl+"/api/lead/"+id)
  }
}

