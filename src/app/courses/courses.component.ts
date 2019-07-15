import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CoursesService } from '../shared/services/courses/courses.service';
import { CourseType } from '../shared/services/courses/models/course.models';
@Component({
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {
  courseTypes$: Subscription;
  types: CourseType[];
  constructor(private coursesService: CoursesService, private router: Router) {}
  ngOnInit(): void {
    this.courseTypes$ = this.coursesService
      .getCourseTypes()
      .subscribe(types => {
        console.log(types);
        this.types = types;
      });
  }
  ngOnDestroy(): void {
    console.log('destroy');
    if (this.courseTypes$) {
      this.courseTypes$.unsubscribe();
    }
  }
  goToCourses(course: CourseType) {
    console.log(course);
    this.router.navigate(['cursos', 'catalogo', course.id]);
  }
}
