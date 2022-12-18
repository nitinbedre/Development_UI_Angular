import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRouteModule } from './student-route.module';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentRouteModule,
    LayoutModule
  ]
})
export class StudentModule { }
