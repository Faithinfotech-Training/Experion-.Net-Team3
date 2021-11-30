import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ManagerComponent,
    HomeComponent,
   
 
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
  providers: [AuthGuard,AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
