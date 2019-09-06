import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Course } from '../course';

@Component({
  selector: 'booking-system-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  thisCourse: Course;
  data: DataService;
  courses = [];

  constructor(dataService: DataService) {
      this.data = dataService;
  }

  ngOnInit() {
  }

}
