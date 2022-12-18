import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { NewStudentComponent } from './new-student/new-student.component';


const routes:  Routes = [
  {
    path: '',
    component: StudentComponent
  },
  {
    path: 'update',
    component: UpdateStudentComponent
  },
  {
    path: 'new',
    component: NewStudentComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentRouteModule { }
