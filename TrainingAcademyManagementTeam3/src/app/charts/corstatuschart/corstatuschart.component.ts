import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/course.service';
import { EnquiryService } from 'src/app/shared/enquiry.service';

@Component({
  selector: 'app-corstatuschart',
  templateUrl: './corstatuschart.component.html',
  styleUrls: ['./corstatuschart.component.css']
})
export class CorstatuschartComponent implements OnInit {

  public doughnutChartLabels = ['Accepted', 'Rejected', 'Responded'];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';
  public doughnutColors=[
    {
      backgroundColor: [
          'rgba(92, 184, 92,1)',
          'rgba(255, 195, 0, 1)',
          'rgba(217, 83, 79,1)',
          'rgba(129, 78, 40, 1)',
          'rgba(129, 199, 111, 1)'
    ]
    }
  ];
  

  constructor(public cenqService:EnquiryService) { }

  ngOnInit(): void {
    this.cenqService.bindListCourseEnquiries();
  }
  getCourseName(){
    var enqdata = this.cenqService.courseenquiries.map(r=>r.CourseEnquiryStatus);
    this.doughnutChartData = [];
    
      var acc:number=0;
      var rej:number=0;
      var resp:number=0;
      for(var edata of enqdata){
        if(edata == 'Accepted'){
          acc++;
        }
        if(edata == 'Rejected'){
          rej++;
        }
        if(edata == 'Responded'){
          resp++;
        }
      }
      this.doughnutChartData.push(acc);
      this.doughnutChartData.push(rej);
      this.doughnutChartData.push(resp);
  
    console.log('data accessed');
  }

}
