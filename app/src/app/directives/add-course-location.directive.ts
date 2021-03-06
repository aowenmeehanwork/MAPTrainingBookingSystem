import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[bookingSystemAddCourseLocation]',
    providers: [{ provide: NG_VALIDATORS,
       useClass: AddCourseLocationDirective, multi: true }]
})

export class AddCourseLocationDirective {

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    if (control.value) {
      return (control.value.length <= 10) ? null : { checklocation: true };
    } return { checklocation: false };

  }

}
