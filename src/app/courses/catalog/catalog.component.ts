import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoursesService } from 'src/app/shared/services/courses/courses.service';
import { Course } from 'src/app/shared/services/courses/models/course.models';

@Component({
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit, OnDestroy {
  catalogSubs: Subscription;
  courses: Course[] = [];
  /**
   *
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseServices: CoursesService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.catalogSubs = this.courseServices
        .getCourses(params.id)
        .subscribe(data => {
          this.courses = data;
        });
    });
  }
  ngOnDestroy(): void {
    this.catalogSubs.unsubscribe();
  }
}
