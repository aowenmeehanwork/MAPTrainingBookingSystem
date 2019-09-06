import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[bookingSystemAddCourse]',
  providers: [{ provide: NG_VALIDATORS,
     useClass: AddCourseDirective, multi: true }]
})
export class AddCourseDirective {

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return (control.value && control.value.length <= 100) ? null : { checktitle: true };
  }
}
