import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { CourseActivitiesComponent } from './course-activities/course-activities.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'course',
    component: CourseComponent
  },
  {
    path: 'course-activities/:courseId',
    component: CourseActivitiesComponent,
  },
  {
    path: 'course-activities/:courseId/activity/:activityId',
    component: ActivityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
