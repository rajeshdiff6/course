import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activity;
  courseId: number;
  activityId: number;
  user;

  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseId = +this.route.snapshot.paramMap.get('courseId');
    this.activityId = +this.route.snapshot.paramMap.get('activityId');
    this.activity = this.courseService.getActivity(this.courseId, this.activityId)[0];
    this.setActivityCompleted();
    this.updateCourseStatus();
  }

  setActivityCompleted() {
    this.user = this.courseService.getUser();
    this.user[0].courses.forEach((course) => {
      if (course.courseId === this.courseId) {
        course.activities.forEach(activity => {
          if (activity.activityId === this.activityId) {
            activity.activityStatus = 'Completed';
          }
        });
      }
    });
    localStorage.setItem('course', JSON.stringify(this.user));
  }

  updateCourseStatus() {
    this.user = this.courseService.getUser();
    this.user[0].courses.forEach((course) => {
      if (course.activities.length == course.activities.filter(activity => activity.activityStatus == 'Completed').length) {
        course.courseStatus = 'Completed';
      }
    });
    localStorage.setItem('course', JSON.stringify(this.user));
  }

}
