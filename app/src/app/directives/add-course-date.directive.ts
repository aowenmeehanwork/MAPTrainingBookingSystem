import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[bookingSystemAddCourseDate]',
    providers: [{ provide: NG_VALIDATORS,
       useClass: AddCourseDateDirective, multi: true }]
})

export class AddCourseDateDirective {

  constructor() { }

  validate(control: AbstractControl): { [key: string] : any } | null {
    return (control.value.match(/(\d{4})-(\d{2})-(\d{2})/)) ? null : { checkdate: true };
  }


}
