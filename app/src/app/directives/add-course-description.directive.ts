import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[bookingSystemAddCourseDescription]',
    providers: [{ provide: NG_VALIDATORS,
       useClass: AddCourseDescriptionDirective, multi: true }]
})
export class AddCourseDescriptionDirective {

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    if (control.value){
      return (control.value.length <= 300) ? null : { checkdescription: true };
    } return { checkdescription: false };

  }

}
