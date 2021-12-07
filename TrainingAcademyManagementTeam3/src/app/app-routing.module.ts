import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { AuthGuard } from './shared/auth.guard';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseComponent } from './courses/course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { ResourceListComponent } from './resources/resource-list/resource-list.component';
import { ResourceComponent } from './resources/resource/resource.component';
import { ResourcelistLeadComponent } from './resources/resourcelist-lead/resourcelist-lead.component';
import { CourselistLeadComponent } from './courses/courselist-lead/courselist-lead.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { LeadComponent } from './leads/lead/lead.component';
import { LeadListComponent } from './leads/lead-list/lead-list.component';
import { LeadsComponent } from './leads/leads.component';
import { BatchListComponent } from './batches/batch-list/batch-list.component';
import { BatchComponent } from './batches/batch/batch.component';
import { BatchesComponent } from './batches/batches.component';
import { SalespipelinelistManagerComponent } from './salespipelines/salespipelinelist-manager/salespipelinelist-manager.component';
import { ResourceenquiriesComponent } from './resourceenquiries/resourceenquiries.component';
import { ResourceenquiryListComponent } from './resourceenquiries/resourceenquiry-list/resourceenquiry-list.component';
import { ResourceenquiryComponent } from './resourceenquiries/resourceenquiry/resourceenquiry.component';
import { CourseenquiryComponent } from './courseenquiries/courseenquiry/courseenquiry.component';
import { CourseenquirylistComponent } from './courseenquiries/courseenquirylist/courseenquirylist.component';
import{EditresourceenquiryComponent} from './resourceenquiries/editresourceenquiry/editresourceenquiry.component';
import{EditcourseenquiryComponent} from './courseenquiries/editcourseenquiry/editcourseenquiry.component';
import{CourseenquiriesComponent} from './courseenquiries/courseenquiries.component'
import { ResourceenquiryviewComponent } from './manager/resourceenquiryview/resourceenquiryview.component';
import { CourseenquiryviewComponent } from './manager/courseenquiryview/courseenquiryview.component';
import { CourseindividualviewComponent } from './courses/courseindividualview/courseindividualview.component';
import { ResourceindividualviewComponent } from './resources/resourceindividualview/resourceindividualview.component';

import {CoordinatorComponent} from './coordinator/coordinator.component'
import {LeadviewComponent} from './leadview/leadview.component'
import { CorenqchartComponent } from './charts/corenqchart/corenqchart.component';
import { ResenqchartComponent } from './charts/resenqchart/resenqchart.component';

import {AboutusComponent} from './aboutus/aboutus.component'

import { CorstatuschartComponent } from './charts/corstatuschart/corstatuschart.component';
import { ResstatuschartComponent } from './charts/resstatuschart/resstatuschart.component';
import { TraineeComponent } from './trainees/trainee/trainee.component';
import { TraineeditComponent } from './trainees/traineedit/traineedit.component';
import { TraineesComponent } from './trainees/trainees.component';
import { TraineeListComponent } from './trainees/trainee-list/trainee-list.component';
import { BatchpageComponent } from './admin/batchpage/batchpage.component';




const routes: Routes = [
  { path: '',redirectTo:'/home', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  {path :'home',component:HomeComponent},
  {path :'admin',component:AdminComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path :'manager',component:ManagerComponent, canActivate:[AuthGuard],data:{role:'2'}},
  {path:'courses',component:CoursesComponent},
  {path:'course', component: CourseComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'courselist',component: CourseListComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'course/:corId', component: CourseComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'courselist/course',component: CourseComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'resources',component:ResourceComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'resource', component: ResourceComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'resourcelist',component: ResourceListComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'resourcelist/resource',component: ResourceComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'resource/:resId', component: ResourceComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'resourcelistlead',component: ResourcelistLeadComponent },
  {path:'courselistlead',component: CourselistLeadComponent },
  {path :'confirm',component:ConfirmComponent},
  {path:'leads',component:LeadsComponent},
  {path :'lead',component:LeadComponent}, //route.snapshot.params[]
  {path :'leadlist',component:LeadListComponent},
  {path :'lead/:leadId',component:LeadComponent}, //route.snapshot.params[]
  {path:'batches',component:BatchesComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'batch', component: BatchComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'batchlist',component: BatchListComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'batch/:batId', component: BatchComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'batchlist/batch',component: BatchComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path:'salespipeline',component: SalespipelinelistManagerComponent, canActivate:[AuthGuard],data:{role:'2'} },
  {path: 'resourceenquiry', component: ResourceenquiryComponent},//lead side form
  {path: 'courseenquiry', component: CourseenquiryComponent},//lead side form
  {path: 'resourceenquirylist', component: ResourceenquiryListComponent, canActivate:[AuthGuard],data:{role:'3'}},//table
  {path: 'courseenquirylist', component: CourseenquirylistComponent, canActivate:[AuthGuard],data:{role:'3'}},//table
  {path: 'resourceenquiries', component: ResourceenquiriesComponent, canActivate:[AuthGuard],data:{role:'3'}},//coordinator side
  {path: 'courseenquiries', component: CourseenquiriesComponent, canActivate:[AuthGuard],data:{role:'3'}},//coordinator side
  {path:'managerresourceenquiryview', component: ResourceenquiryviewComponent, canActivate:[AuthGuard],data:{role:'2'}},
  {path:'editcourseenquirystatus', component: EditcourseenquiryComponent, canActivate:[AuthGuard],data:{role:'2'}},
  {path :'managercourseenquiryview',component:CourseenquiryviewComponent, canActivate:[AuthGuard],data:{role:'2'}},
  {path:'editresourceenquirystatus', component: EditresourceenquiryComponent, canActivate:[AuthGuard],data:{role:'3'}},
   {path:'resourceindividualview/:resId', component: ResourceindividualviewComponent},
  {path:'coordinator',component:CoordinatorComponent,canActivate:[AuthGuard],data:{role:'3'}},
  {path:'leadview',component:LeadviewComponent},
  {path:'courseindividualview/:corId', component: CourseindividualviewComponent},
  {path:'charts/corenqchart', component: CorenqchartComponent, canActivate:[AuthGuard],data:{role:'2'}},
  {path:'charts/resenqchart', component: ResenqchartComponent, canActivate:[AuthGuard],data:{role:'2'}},

  {path:'aboutus',component:AboutusComponent},

  {path:'charts/corstatuschart', component: CorstatuschartComponent},
  {path:'charts/resstatuschart', component: ResstatuschartComponent},
  {path:'trainee', component: TraineeComponent, canActivate:[AuthGuard],data:{role:'1'}},
  {path:'traineelist', component: TraineeListComponent, canActivate:[AuthGuard],data:{role:'1'}},
  {path:'traineedit', component: TraineeditComponent, canActivate:[AuthGuard],data:{role:'1'}},
  {path:'traineedit/trainee', component: TraineeComponent, canActivate:[AuthGuard],data:{role:'1'}},
  {path:'trainee/:trId', component: TraineeComponent, canActivate:[AuthGuard],data:{role:'1'}},
  {path:'trainees', component: TraineesComponent, canActivate:[AuthGuard],data:{role:'1'}},
  {path:'trainees/trainee', component: TraineeComponent, canActivate:[AuthGuard],data:{role:'1'}},

  {path:'batchpage', component: BatchpageComponent, canActivate:[AuthGuard],data:{role:'1'}},

 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
