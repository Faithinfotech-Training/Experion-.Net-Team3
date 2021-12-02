import { Injectable } from '@angular/core';
import { ResourceenquiryComponent } from '../resourceenquiries/resourceenquiry/resourceenquiry.component';
import { HttpClient } from '@angular/common/http';
import { Resourceenquiry } from './resourceenquiry';
import { Courseenquiry } from './courseenquiry';
import { environment } from 'src/environments/environment';
import { Resource } from './resource'
import { Course } from './course'
import { Lead } from './lead'
import { Observable } from 'rxjs';
import { CourseenquiryComponent } from '../courseenquiries/courseenquiry/courseenquiry.component';
@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  formData: Resourceenquiry
    = new Resourceenquiry();
    formData2:Courseenquiry=new Courseenquiry();
    resourceEditData:Resourceenquiry=new Resourceenquiry();
    courseenquiries:Courseenquiry[];
    courses:Course[];
  resourceenquiries: Resourceenquiry[];
  resources: Resource[];
  lead: Lead[];
  constructor(private httpClient: HttpClient) { }

  bindListResourceEnquiries() {
    this.httpClient.get(environment.apiUrl + "/api/resourceenquiry/getresourceenquiries")
      .toPromise().then(response =>
        this.resourceenquiries = response as Resourceenquiry[]);
  }
  bindListCourseEnquiries() {
    this.httpClient.get(environment.apiUrl + "/api/courseenquiry/getcourseenquiries")
      .toPromise().then(response =>
        this.courseenquiries = response as Courseenquiry[]);
  }
  insertResourceenquiry(resourceenquiry: Resourceenquiry): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "/api/Resourceenquiry/addResourceenquiry", resourceenquiry);
  }
  insertCourseenquiry(courseenquiry: Courseenquiry): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "/api/Courseenquiry/addcourseenquiry", courseenquiry);
  }
  updateResourceenquiry(resourceenquiry: Resourceenquiry): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/api/Resourceenquiry/updateResourceenquiry", resourceenquiry);

  }
  updateCourseenquiry(courseenquiry: Courseenquiry): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/api/Courseenquiry/updatecourseenquiry", courseenquiry);

  }

  deleteResourceenquiry(id: number) {
    return this.httpClient.delete(environment.apiUrl + "/api/Resourceenquiry/deleteResourceenquiry?id=" + id);

  }
  deleteCourseenquiry(id: number) {
    return this.httpClient.delete(environment.apiUrl + "/api/courseenquiry/deletecourseenquiry?id=" + id);

  }

  BindCmbResources() {
    this.httpClient.get(environment.apiUrl + "/api/resource")
      .toPromise().then(response =>
        this.resources = response as Resource[]
      );
    console.log(this.resources);

  }
  BindCmbCourses() {
    this.httpClient.get(environment.apiUrl + "/api/course")
      .toPromise().then(response =>
        this.courses = response as Course[]
      );
    console.log(this.courses);

  }
  BindCmbLeads() {
    this.httpClient.get(environment.apiUrl + "/api/resource/getleads")
      .toPromise().then(response =>
        this.lead = response as Lead[]
      );
    console.log(this.lead);

  }
  getResourceEnquiry(ResourceEnquiryId: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/resourceenquiry/getresourceenquirybyid?id=" + ResourceEnquiryId);
  }
  getCourseEnquiry(CourseEnquiryId: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl + "/api/courseenquiry/getcourseenquirybyid?id=" + CourseEnquiryId);
  }


}
