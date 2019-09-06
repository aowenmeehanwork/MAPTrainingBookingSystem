import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './course';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(courses: Course[], filterText : string): Course[] {
    if (!courses) {
        return [];
    }
    if (!filterText) {
        return courses;
    }

    return courses.filter(c => {
        return c.Course_Title.toLowerCase().includes(filterText.toLowerCase());
    });
  }
}
