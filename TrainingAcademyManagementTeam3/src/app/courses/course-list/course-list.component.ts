import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/course.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/shared/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  page:number=1;
filter:string;
  constructor(public courseService:CourseService,private toastrService:ToastrService,private router :Router) { }

  ngOnInit(): void {
    this.courseService.bindListCourses();
  }


  //populate form by clicking the column fields
  populateForm(cor:Course){
    console.log(cor);
    this.courseService.formData=Object.assign({},cor);
   
  }
  //delete course
  deleteCourse(id:number){
    console.log("deleting record....");
    if(confirm('Are yo sure to DELETE this record?')){
      this.courseService.deleteCourse(id).subscribe(
        (result)=>{
          console.log(result);
          this.courseService.bindListCourses();
          this.toastrService.success('Course record has been deleted','TrainingApp v2021');
       
        },
        (error)=>{
          console.log(error);
       
        });
    }
  }
//update a course
updateCourse(corId:number)
{
  console.log(corId);
    this.router.navigate(['course',corId])
  
}
}