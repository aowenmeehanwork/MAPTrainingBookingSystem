import { Component, OnInit, Input} from '@angular/core';
import { Course } from '../course';
import { DataService } from '../data.service';

@Component({
  selector: 'booking-system-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  public success;

  @Input()
  public newCourse: Course;
  data: DataService;

  constructor(dataService: DataService) {
    this.data = dataService;
  }

  addCourse(addForm): void {
    if (addForm.valid) {
        const courseToAdd: Course = this.newCourse;
        courseToAdd.Course_Current_Bookings = "0";
        this.newCourse = new Course();
        this.data.addCourse(courseToAdd);

        this.success = 'Course added successfully!';
        setTimeout(() => {
            this.success = "";
        }, 5000);

    } else {
        console.error('Add course form is invalid');
    }
  }

  ngOnInit() {
    this.newCourse = new Course();
  }

}
