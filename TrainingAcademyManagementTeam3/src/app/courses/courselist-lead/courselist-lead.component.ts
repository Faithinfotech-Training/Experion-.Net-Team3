import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/course.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/shared/course';


@Component({
  selector: 'app-courselist-lead',
  templateUrl: './courselist-lead.component.html',
  styleUrls: ['./courselist-lead.component.css']
})
export class CourselistLeadComponent implements OnInit {

  page:number=1;
  filter:string;
    constructor(public courseService:CourseService,private toastrService:ToastrService,private router :Router) { }
  
    ngOnInit(): void {
      this.courseService.bindListCourses();
    }
  
  
    
    }
    
  
