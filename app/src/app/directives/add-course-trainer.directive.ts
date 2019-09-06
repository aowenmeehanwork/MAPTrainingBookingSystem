import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[bookingSystemAddCourseTrainer]',
    providers: [{ provide: NG_VALIDATORS,
       useClass: AddCourseTrainerDirective, multi: true }]
})

export class AddCourseTrainerDirective {

  constructor() { }

  validate(control: AbstractControl): { [key: string]: any } | null {
    return (control.value.length <= 100) ? null : { checktrainername: true };
  }
}
