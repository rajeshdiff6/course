import { Injectable } from '@angular/core';

import course from '../../assets/course.json';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourse() {
    return JSON.parse(localStorage.getItem('course'))[0].courses;
  }

  setCourse() {
    return localStorage.setItem('course', JSON.stringify(course));
  }

  getCourseActivities(courseId) {
    return this.getCourse().filter(item => item.courseId == courseId)[0];
  }

  getActivity(courseId, activityId) {
    return this.getCourse().filter(item => item.courseId == courseId)[0].activities.filter(activity => activity.activityId == activityId);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('course'));
  }

  dummyUser() {
    const users = [];
    const user = {
      "firstName": "John",
      "lastName": "Smith",
      "username": "john",
      "password": "smith",
      "id": 2
    };
    users.push(user);

    const usersKey = 'angular-10-registration-login-example-users';
    localStorage.setItem(usersKey, JSON.stringify(users));
  }
}
