import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Resource } from 'src/app/shared/resource';
import { ResourceService } from 'src/app/shared/resource.service';

@Component({
  selector: 'app-resourceindividualview',
  templateUrl: './resourceindividualview.component.html',
  styleUrls: ['./resourceindividualview.component.css']
})
export class ResourceindividualviewComponent implements OnInit {

  resId:number;
  resource:Resource=new Resource();
  constructor(public resourceService:ResourceService,private toastrService: ToastrService,private router :Router,
  private route:ActivatedRoute) { }
   ngOnInit(): void {
    this.resId=this.route.snapshot.params['resId'];
      if(this.resId!=0||this.resId!=null){
         this.resourceService.getResource(this.resId).subscribe(
           data=>{
             console.log(data);
               this.resourceService.cardData=data;
                    this.resourceService.cardData=Object.assign({},data);
                  },

          error=>

          console.log(error)

        );

      }

   

   

    }



 



}


