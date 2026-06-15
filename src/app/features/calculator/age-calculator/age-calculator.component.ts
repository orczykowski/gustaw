import {Component, OnInit} from '@angular/core';
import {AbstractControl, UntypedFormControl, UntypedFormGroup, ValidationErrors, Validators} from '@angular/forms';
import {AGE_UNIT, AgeCalculatorService} from './age-calculator.service';
import {SeoService} from '../../../core/seo.service';

export interface CatAgeResult {
  years: number;
  months: number;
  days: number;
  totalMonths: number;
  label: string;
}

function notInFuture(control: AbstractControl): ValidationErrors | null {
  if (!control.value) return null;
  return new Date(control.value) > new Date() ? {future: true} : null;
}

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css'],
  standalone: false
})
export class AgeCalculatorComponent implements OnInit {
  catAgeResult: CatAgeResult | null = null;
  humanAge: number | null = null;
  readonly todayStr = new Date().toISOString().split('T')[0];

  form = new UntypedFormGroup({
    birthDate: new UntypedFormControl(null, [Validators.required, notInFuture])
  });

  constructor(private ageCalculator: AgeCalculatorService, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Kalkulator wieku kota',
      description: 'Przelicz wiek swojego kota na ludzkie lata. Podaj datę urodzin kota i sprawdź, ile lat miałby, gdyby był człowiekiem.'
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      'name': 'Kalkulator wieku kota',
      'applicationCategory': 'HealthApplication',
      'operatingSystem': 'Web',
      'url': 'https://gorczykowski.github.io/gustaw/kalkulator/wiek',
      'description': 'Przelicz wiek swojego kota na ludzkie lata. Podaj datę urodzin kota i sprawdź, ile lat miałby, gdyby był człowiekiem.',
      'inLanguage': 'pl',
      'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'PLN' },
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    const birth = new Date(this.form.value.birthDate);
    const today = new Date();

    this.catAgeResult = this.computeAge(birth, today);
    const result = this.ageCalculator.calculate(this.catAgeResult.totalMonths, AGE_UNIT.MONTH);
    this.humanAge = result.catAge;
  }

  private computeAge(birth: Date, today: Date): CatAgeResult {
    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      const daysInPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      days += daysInPrevMonth;
    }
    if (months < 0) {
      years--;
      months += 12;
    }

    const totalMonths = years * 12 + months + days / 30;

    return {years, months, days, totalMonths, label: this.formatAge(years, months, days)};
  }

  private formatAge(years: number, months: number, days: number): string {
    const parts: string[] = [];
    if (years > 0) parts.push(`${years} ${this.pluralize(years, 'rok', 'lata', 'lat')}`);
    if (months > 0) parts.push(`${months} ${this.pluralize(months, 'miesiąc', 'miesiące', 'miesięcy')}`);
    if (years === 0 && months === 0) parts.push(`${days} ${this.pluralize(days, 'dzień', 'dni', 'dni')}`);
    return parts.join(' i ') || '0 dni';
  }

  private pluralize(n: number, one: string, few: string, many: string): string {
    if (n === 1) return one;
    if (n >= 2 && n <= 4) return few;
    return many;
  }
}
