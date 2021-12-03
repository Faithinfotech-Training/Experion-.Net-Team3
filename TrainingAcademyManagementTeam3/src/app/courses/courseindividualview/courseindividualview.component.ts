import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/shared/course';
import { CourseService } from 'src/app/shared/course.service';

@Component({
  selector: 'app-courseindividualview',
  templateUrl: './courseindividualview.component.html',
  styleUrls: ['./courseindividualview.component.css']
})
export class CourseindividualviewComponent implements OnInit {

  corId: number;
  course: Course = new Course();

  constructor(public courseService: CourseService, private toastrService: ToastrService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.corId = this.route.snapshot.params['corId'];
    if (this.corId != 0 || this.corId != null) {
      this.courseService.getCourse(this.corId).subscribe(
        data => {
          console.log(data);
          this.courseService.cardData = data;
          this.courseService.cardData = Object.assign({}, data);
          
        },
        error =>
          console.log(error)
      );
    }
  }
}
