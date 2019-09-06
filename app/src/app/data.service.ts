import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';
import { ErrorCode } from '@angular/compiler-cli/src/ngtsc/diagnostics';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public courses = [];

  constructor(private http: HttpClient) {
    this.http.get<Course[]>('/api/course').subscribe( res => {
      console.log(res);
      for (let course of res) {
        course.Course_Date = new Date(course.Course_Date).toString().substr(0, 15);
        this.courses.push(course);
      }
    });
  }


  public addCourse(newCourse: Course): void {
    this.http.post<[Course, ErrorCode]>('/api/course', newCourse).subscribe( res => {
        if (res == null) {
            console.log('Course was not added!');
        } else {
            console.log('Added new course!');
        }
    });
  }
}
