import { Component, OnInit, Input} from '@angular/core';
import { Course } from '../course';
import { DataService } from '../data.service';

@Component({
  selector: 'booking-system-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input()
  public newCourse: Course;
  data: DataService;

  constructor(dataService: DataService) {
    this.data = dataService;
  }

  addCourse(addForm): void {
    if (addForm.valid) {
        const courseToAdd: Course = this.newCourse;
        this.newCourse = new Course();
        this.data.addCourse(courseToAdd);
    } else {
        console.error('Add course form is invalid');
    }
  }

  ngOnInit() {
    this.newCourse = new Course();
  }
}
