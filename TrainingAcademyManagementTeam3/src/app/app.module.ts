import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CourseService } from './shared/course.service';
import { ResourceService } from './shared/resource.service';
import { BatchService } from './shared/batch.service';
import { SalesPipelineService } from './shared/salespipeline.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthGuard} from './shared/auth.guard';
import { AuthService } from './shared/auth.service';
import { AuthInterceptor } from './shared/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { HomeComponent } from './home/home.component';




import { ToastrModule } from 'ngx-toastr';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResourceComponent } from './resources/resource/resource.component';
import { ResourceListComponent } from './resources/resource-list/resource-list.component';
import { ResourcelistLeadComponent } from './resources/resourcelist-lead/resourcelist-lead.component';
import { CourselistLeadComponent } from './courses/courselist-lead/courselist-lead.component';
import { LeadsComponent } from './leads/leads.component';
import { LeadComponent } from './leads/lead/lead.component';
import { LeadListComponent } from './leads/lead-list/lead-list.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ConfirmService } from './shared/confirm.service';
import { LeadService } from './shared/lead.service';
import { BatchesComponent } from './batches/batches.component';
import { BatchComponent } from './batches/batch/batch.component';
import { BatchListComponent } from './batches/batch-list/batch-list.component';
import { SalespipelinesComponent } from './salespipelines/salespipelines.component';
import { SalespipelinelistManagerComponent } from './salespipelines/salespipelinelist-manager/salespipelinelist-manager.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ManagerComponent,
    HomeComponent,
    CoursesComponent,
    CourseComponent,
    CourseListComponent,
    ResourcesComponent,
    ResourceComponent,
    ResourceListComponent,
    ResourcelistLeadComponent,
    CourselistLeadComponent,
    LeadsComponent,
    LeadComponent,
    LeadListComponent,
    ConfirmComponent,
    BatchesComponent,
    BatchComponent,
    BatchListComponent,
    SalespipelinesComponent,
    SalespipelinelistManagerComponent,
  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [CourseService,ResourceService,ConfirmService,LeadService,AuthGuard,AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
