import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
{path: '', redirectTo:'/login', pathMatch:'full'},
  {path : 'dashboard' , component: DashboardComponent , canActivate: [AuthGuard]},
  {path:'student' , component : StudentComponent,canActivate: [AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
