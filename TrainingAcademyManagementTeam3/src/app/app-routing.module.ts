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
const routes: Routes = [
  { path: '',redirectTo:'/home', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  {path :'home',component:HomeComponent},
  {path :'admin',component:AdminComponent,canActivate:[AuthGuard],data:{role:'1'}},
  {path :'manager',component:ManagerComponent, canActivate:[AuthGuard],data:{role:'2'}},
  {path:'courses',component:CoursesComponent},
  {path:'course', component: CourseComponent},
  {path:'courselist',component: CourseListComponent},
  {path:'course/:corId', component: CourseComponent},
  {path:'courselist/course',component: CourseComponent},
  {path:'resources',component:ResourceComponent},
  {path:'resource', component: ResourceComponent},
  {path:'resourcelist',component: ResourceListComponent},
  {path:'resourcelist/resource',component: ResourceComponent},
  {path:'resource/:resId', component: ResourceComponent},
  {path:'resourcelistlead',component: ResourcelistLeadComponent },
  {path:'courselistlead',component: CourselistLeadComponent },
  {path :'confirm',component:ConfirmComponent},
  {path:'leads',component:LeadsComponent},
  {path :'lead',component:LeadComponent}, //route.snapshot.params[]
  {path :'leadlist',component:LeadListComponent},
  {path :'lead/:leadId',component:LeadComponent}, //route.snapshot.params[]
  {path:'batches',component:BatchesComponent},
  {path:'batch', component: BatchComponent},
  {path:'batchlist',component: BatchListComponent},
  {path:'batch/:batId', component: BatchComponent},
  {path:'batchlist/batch',component: BatchComponent},
  {path:'salespipeline',component: SalespipelinelistManagerComponent },
  {path: 'resourceenquiry', component: ResourceenquiryComponent},//lead side form
  {path: 'courseenquiry', component: CourseenquiryComponent},//lead side form
  {path: 'resourceenquirylist', component: ResourceenquiryListComponent},//table
  {path: 'courseenquirylist', component: CourseenquirylistComponent},//table
  {path: 'resourceenquiries', component: ResourceenquiriesComponent},//coordinator side
  {path: 'courseenquiries', component: CourseenquiriesComponent},//coordinator side
  {path:'managerresourceenquiryview', component: ResourceenquiryviewComponent},
  {path:'editcourseenquirystatus', component: EditcourseenquiryComponent},
  {path :'managercourseenquiryview',component:CourseenquiryviewComponent},
  {path:'editresourceenquirystatus', component: EditresourceenquiryComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
