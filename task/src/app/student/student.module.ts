import { StudentService } from './student.service';
import { AngularMaterialModule } from './../angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdddataComponent } from './adddata/adddata.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdddataComponent],
  imports: [
    CommonModule,
    FormsModule,
    AngularMaterialModule
  ],
  exports: [
    AdddataComponent
  ],
  providers:[StudentService]
})
export class StudentModule { }
