import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Resourceenquiryview } from './resourceenquiryview';

@Injectable({
  providedIn: 'root'
})
export class ResourceenquiryviewService {

  formData:Resourceenquiryview=new Resourceenquiryview();
  resourceenquiryviews: Resourceenquiryview[];
  constructor(private httpClient: HttpClient) { }
//display resourceenquiryview
bindresourceenquiryview(){
     this.httpClient.get(environment.apiUrl+"/api/resourceenquiry/getallresourceenquiry")
     .toPromise().then(response=>
     this.resourceenquiryviews = response as Resourceenquiryview[]);
}
}