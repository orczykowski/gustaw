import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {BcsCalculatorService, BcsInfo, BcsResult} from './bcs-calculator.service';

@Component({
  selector: 'app-bcs-calculator',
  templateUrl: './bcs-calculator.component.html',
  styleUrls: ['./bcs-calculator.component.css'],
  standalone: false
})
export class BcsCalculatorComponent {
  result: BcsResult | null = null;
  readonly bcsValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  readonly expandedBcs = new Set<number>();

  form = new UntypedFormGroup({
    weight: new UntypedFormControl(null, [Validators.required, Validators.min(0.1), Validators.max(100)]),
    bcs: new UntypedFormControl(null, [Validators.required]),
  });

  constructor(private service: BcsCalculatorService) {}

  setBcs(bcs: number): void {
    this.form.patchValue({bcs});
  }

  currentBcsInfo(): BcsInfo | null {
    const bcs = this.form.value.bcs;
    return bcs ? this.service.getInfo(bcs) : null;
  }

  infoFor(bcs: number): BcsInfo {
    return this.service.getInfo(bcs);
  }

  toggleBcsDetail(bcs: number): void {
    if (this.expandedBcs.has(bcs)) {
      this.expandedBcs.delete(bcs);
    } else {
      this.expandedBcs.add(bcs);
    }
  }

  isBcsExpanded(bcs: number): boolean {
    return this.expandedBcs.has(bcs);
  }

  get weightActionLabel(): string {
    if (!this.result) return '';
    const diff = this.result.weightDifferenceKg;
    const w = Math.round(Math.abs(diff) * 10) / 10;
    if (diff > 0) return `Do zrzucenia: ${w} kg`;
    if (diff < 0) return `Do przybrania: ${w} kg`;
    return 'Waga w normie';
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    this.result = this.service.calculate(this.form.value.weight, this.form.value.bcs);
  }
}
