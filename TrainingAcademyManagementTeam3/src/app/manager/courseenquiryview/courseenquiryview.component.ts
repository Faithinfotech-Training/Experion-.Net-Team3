import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CourseenquiryviewService } from 'src/app/shared/courseenquiryview.service';

@Component({
  selector: 'app-courseenquiryview',
  templateUrl: './courseenquiryview.component.html',
  styleUrls: ['./courseenquiryview.component.css']
})
export class CourseenquiryviewComponent implements OnInit {
  page: number = 1;
  filter: string;
  constructor(public courseenquiryviewService: CourseenquiryviewService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.courseenquiryviewService.bindcourseenquiryview();
  }

}

