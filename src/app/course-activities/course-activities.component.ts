import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-activities',
  templateUrl: './course-activities.component.html',
  styleUrls: ['./course-activities.component.scss']
})
export class CourseActivitiesComponent implements OnInit {

  courseActivities = [];
  constructor(
    private router: ActivatedRoute,
    private courseService: CourseService
  ) { }

  ngOnInit(): void {
    this.courseActivities = this.courseService.getCourseActivities(this.router.snapshot.paramMap.get('courseId'));
  }

}
