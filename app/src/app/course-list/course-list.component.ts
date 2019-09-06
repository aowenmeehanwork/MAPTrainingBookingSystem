import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { DataService } from '../data.service';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  thisCourse: Course;
  data: DataService;
  courses = [];


//   courses = [
//     {
//       Course_Title: "Jeremy Course",
//       Course_Date: "01/04/19",
//       Course_Location: "Hell",
//       Course_Description: "Heavenly",
//       Course_Aim: "None",
//       Course_Trainer_Name: "Jezza"
//       }
//     ];


  constructor(dataService: DataService) {
    this.data = dataService
  }

  onSelect (newCourse: Course) : void{
       this.thisCourse = newCourse;
     }

  ngOnInit() {
  }

}
