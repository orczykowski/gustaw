import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-validation-error',
  template: '<span class="validation-error" *ngIf="this.shouldShow()">{{msg}}</span>',
  styleUrls: ['./validation-error.component.css']
})
export class ValidationErrorComponent implements OnInit {

  @Input()
  formField: any | null = null;

  @Input()
  validatorName: string = 'required';

  @Input()
  msg: string | null = 'Pole jest wymagane';


  constructor() {
  }

  ngOnInit(): void {
  }

  shouldShow() {
    return this.formField !== null &&
      this.formField?.errors?.[this.validatorName] &&
      (this.formField?.dirty || this.formField?.touched);
  }

}
