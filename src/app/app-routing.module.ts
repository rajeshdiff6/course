import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { CourseActivitiesComponent } from './course-activities/course-activities.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './_helpers';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: CourseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'course-activities/:courseId',
    component: CourseActivitiesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'course-activities/:courseId/activity/:activityId',
    component: ActivityComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
