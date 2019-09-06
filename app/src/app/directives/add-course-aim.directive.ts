import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[bookingSystemAddCourseAim]',
    providers: [{ provide: NG_VALIDATORS,
       useClass: AddCourseAimDirective, multi: true }]
  })
export class AddCourseAimDirective {

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return (control.value && control.value.length <= 200) ? null : { checkaim: true };
  }

}
