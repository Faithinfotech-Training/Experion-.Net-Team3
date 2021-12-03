import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  //create an instance of course
  formData:Course=new Course();
  cardData:Course=new Course();
  
  courses: Course[];


  constructor(private httpClient: HttpClient) { }



  //insert Course
  insertCourse(course:Course):Observable<any>{
    return this.httpClient.post(environment.apiUrl+"/api/course",course)
  }

  //update Course
  updateCourse(course:Course):Observable<any>{
    return this.httpClient.put(environment.apiUrl+"/api/course",course)
  }
//DELETE
deleteCourse(id: number){
  return this.httpClient.delete(environment.apiUrl +"/api/course/"+id);
}

//display Course
  bindListCourses(){
    this.httpClient.get(environment.apiUrl+"/api/course")
    .toPromise().then(response=>
      this.courses=response as Course[]);

    
  }

  //get a paticular course
  getCourse(corId:number):Observable<any>{
  return this.httpClient.get(environment.apiUrl+"/api/course/"+corId)
  }
}


