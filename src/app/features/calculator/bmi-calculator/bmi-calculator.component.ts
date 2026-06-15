import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {BmiCalculatorService, BmiResult} from './bmi-calculator.service';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css'],
  standalone: false
})
export class BmiCalculatorComponent {
  result: BmiResult | null = null;
  measureGuideOpen = false;

  form = new UntypedFormGroup({
    weight: new UntypedFormControl(null, [Validators.required, Validators.min(0.1), Validators.max(30)]),
    length: new UntypedFormControl(null, [Validators.required, Validators.min(10), Validators.max(150)])
  });

  constructor(private service: BmiCalculatorService) {}

  onSubmit(): void {
    if (this.form.invalid) return;
    this.result = this.service.calculate(
      parseFloat(this.form.value.weight),
      parseFloat(this.form.value.length)
    );
  }
}
