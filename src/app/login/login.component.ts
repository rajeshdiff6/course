import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.setCourse();
  }

  goToCourse() {
    this.router.navigate(['/course']);
  }
}
