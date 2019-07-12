import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Course, CourseType } from './models/course.models';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courseTypeCollection: AngularFirestoreCollection<CourseType>;
  /**
   *
   */
  constructor(private fb: AngularFirestore) {
    this.courseTypeCollection = this.fb.collection<CourseType>('courseTypes');
  }
  getCourseTypes(): Observable<CourseType[]> {
    return this.courseTypeCollection.valueChanges();
  }
  getCourses(typeId: string) {
    return this.fb.collection<Course>('Courses', ref =>
      ref.where('courseTypeId', '==', typeId)
    );
  }
  getCourse(courseId: string): Observable<Course> {
    return this.fb
      .collection<Course>('Courses')
      .doc<Course>(courseId)
      .valueChanges();
  }
}
