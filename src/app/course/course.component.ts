import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  course = [];
  user = [];
  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.course = this.courseService.getCourse();
  }

  rating(event, courseId) {
    this.user = this.courseService.getUser();
    this.user[0].courses.forEach(course => {
      if (course.courseId === courseId) {
        course.courseRatingValues.push(event.value);
        course.courseRating = (course.courseRatingValues.reduce((a, b) => a + b, 0)) / course.courseRatingValues.length;
      }
    });
    localStorage.setItem('course', JSON.stringify(this.user));
    this.course = this.courseService.getCourse();
  }
}
