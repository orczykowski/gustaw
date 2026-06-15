import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {BmiCalculatorService, BmiResult} from './bmi-calculator.service';
import {SeoService} from '../../../core/seo.service';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css'],
  standalone: false
})
export class BmiCalculatorComponent implements OnInit {
  result: BmiResult | null = null;
  measureGuideOpen = false;

  form = new UntypedFormGroup({
    weight: new UntypedFormControl(null, [Validators.required, Validators.min(0.1), Validators.max(30)]),
    length: new UntypedFormControl(null, [Validators.required, Validators.min(10), Validators.max(150)])
  });

  constructor(private service: BmiCalculatorService, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Kalkulator BMI kota',
      description: 'Oblicz wskaźnik BMI swojego kota na podstawie wagi i długości ciała. Sprawdź, czy twój kot ma prawidłową masę ciała.'
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      'name': 'Kalkulator BMI kota',
      'applicationCategory': 'HealthApplication',
      'operatingSystem': 'Web',
      'url': 'https://gorczykowski.github.io/gustaw/kalkulator/bmi',
      'description': 'Oblicz wskaźnik BMI swojego kota na podstawie wagi i długości ciała. Sprawdź, czy twój kot ma prawidłową masę ciała.',
      'inLanguage': 'pl',
      'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'PLN' },
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    this.result = this.service.calculate(
      parseFloat(this.form.value.weight),
      parseFloat(this.form.value.length)
    );
  }
}