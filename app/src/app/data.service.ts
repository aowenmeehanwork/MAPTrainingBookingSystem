import { Injectable } from '@angular/core';
import { Course } from './course';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { ErrorCode } from '@angular/compiler-cli/src/ngtsc/diagnostics';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public user;

  constructor(private http: HttpClient) { }

  public addCourse(newCourse: Course): void {
    this.http.post<[Course, ErrorCode]>('/api/course', newCourse).subscribe( res => {
        if (res == null) {
            console.log('Course was not added!');
        } else {
            console.log('Added new course!');
        }
    });
  }

  async getUser(user: User): Promise<User> {
      this.user = await this.http.get<User>('/api/getUser/' + user.Email)
      .toPromise()
      .then(resp => resp as User);

      return this.user;
  }
}
