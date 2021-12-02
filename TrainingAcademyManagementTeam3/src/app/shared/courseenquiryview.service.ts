import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Courseenquiryview} from './courseenquiryview';


@Injectable({
  providedIn: 'root'
})
export class CourseenquiryviewService {

  formData:Courseenquiryview=new Courseenquiryview();
  
  courseenquiryviews: Courseenquiryview[];


  constructor(private httpClient: HttpClient) { }


//display courseenquiryview
  bindcourseenquiryview(){
    this.httpClient.get(environment.apiUrl+"/api/courseenquiry/getallcourseenquiry")
    .toPromise().then(response=>
      this.courseenquiryviews = response as Courseenquiryview[]);
   
  }

  
}

