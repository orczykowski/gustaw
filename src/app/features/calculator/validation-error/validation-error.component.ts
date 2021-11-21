import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-validation-error',
  template: '<span *ngIf="this.shouldShow()" class="validation-error">{{msg}}</span>',
  styleUrls: ['./validation-error.component.css']
})
export class ValidationErrorComponent {

  @Input()
  formField: any | null = null;

  @Input()
  validatorName = 'required';

  @Input()
  msg: string | null = 'Pole jest wymagane';

  shouldShow = () => {
    return this.formField !== null &&
      this.formField?.errors?.[this.validatorName] &&
      (this.formField?.dirty || this.formField?.touched);
  }

}
