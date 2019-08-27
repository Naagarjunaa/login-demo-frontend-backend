import { StudentModule } from './student/student.module';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { AuthserviceService } from './authservice.service';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseModule } from '../app/base/base.module';
import { StudentComponent } from './student/student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdddataComponent } from './student/adddata/adddata.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighchartComponent } from './highchart/highchart.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    HighchartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    BaseModule,
    FormsModule,
    HttpClientModule,
    StudentModule,
    NgbModule
  ],
  providers: [AuthserviceService, AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent],
  exports : [],
  entryComponents: [
    AdddataComponent
]
})
export class AppModule { }
