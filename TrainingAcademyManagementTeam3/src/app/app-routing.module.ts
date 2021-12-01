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

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
