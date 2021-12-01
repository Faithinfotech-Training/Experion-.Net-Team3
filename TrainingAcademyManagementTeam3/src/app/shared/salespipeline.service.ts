import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { SalesPipeline } from './salespipeline';

@Injectable({
  providedIn: 'root'
})
export class SalesPipelineService {

  //create an instance of salespipeline
  formData:SalesPipeline=new SalesPipeline();
  
  salespipelines: SalesPipeline[];


  constructor(private httpClient: HttpClient) { }



  //insert SalesPipeline
  insertSalesPipeline(salespipeline:SalesPipeline):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/salespipeline",salespipeline)
  }

  //update SalesPipeline
  updateSalesPipeline(salespipeline:SalesPipeline):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/api/salespipeline",salespipeline)
  }
//DELETE
deleteSalesPipeline(id: number){
  return this.httpClient.delete(environment.apiUrl +"/api/salespipeline/"+id);
}

//display SalesPipeline
  bindListSalesPipelines(){
    this.httpClient.get(environment.apiUrl+"/api/salespipeline")
    .toPromise().then(response=>
      this.salespipelines=response as SalesPipeline[]);

    
  }

  //get a paticular salespipeline
  getSalesPipeline(corId:number):Observable<any>{
  return this.httpClient.get(environment.apiUrl+"/api/salespipeline/"+corId)
  }
}


