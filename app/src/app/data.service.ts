import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';
import { ErrorCode } from '@angular/compiler-cli/src/ngtsc/diagnostics';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public courses;

  constructor(private http: HttpClient) {
    this.http.get<Course[]>('/api/course').subscribe( res => {
      console.log(res);
      this.courses = res;
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
