import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent
    
  ],
  imports: [AngularMaterialModule,CommonModule],
  providers: [],
  exports: [HeaderComponent,SidebarComponent]
})
export class BaseModule { }
