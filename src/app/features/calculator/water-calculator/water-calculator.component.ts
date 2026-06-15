import {Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {ActivityLevel, DietType, Environment, LifeStage, WaterCalculatorService, WaterResult} from './water-calculator.service';
import {SeoService} from '../../../core/seo.service';

@Component({
  selector: 'app-water-calculator',
  templateUrl: './water-calculator.component.html',
  styleUrls: ['./water-calculator.component.css'],
  standalone: false
})
export class WaterCalculatorComponent implements OnInit {
  result: WaterResult | null = null;

  form = new UntypedFormGroup({
    weight: new UntypedFormControl(null, [Validators.required, Validators.min(0.1), Validators.max(100)]),
    diet: new UntypedFormControl(null),
    activity: new UntypedFormControl(null),
    environment: new UntypedFormControl(null),
    lifeStage: new UntypedFormControl(null),
    pregnantOrNursing: new UntypedFormControl(false),
  });

  constructor(private service: WaterCalculatorService, private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Kalkulator nawodnienia kota',
      description: 'Oblicz dzienne zapotrzebowanie swojego kota na wodę uwzględniając wagę, dietę, aktywność i warunki środowiskowe.'
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      'name': 'Kalkulator nawodnienia kota',
      'applicationCategory': 'HealthApplication',
      'operatingSystem': 'Web',
      'url': 'https://gorczykowski.github.io/gustaw/kalkulator/woda',
      'description': 'Oblicz dzienne zapotrzebowanie swojego kota na wodę uwzględniając wagę, dietę, aktywność i warunki środowiskowe.',
      'inLanguage': 'pl',
      'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'PLN' },
    });
  }

  toggle<T>(field: string, value: T): void {
    const current = this.form.get(field)?.value;
    this.form.patchValue({[field]: current === value ? null : value});
  }

  isSelected(field: string, value: unknown): boolean {
    return this.form.get(field)?.value === value;
  }

  onSubmit(): void {
    if (this.form.invalid) return;
    this.result = this.service.calculate({
      weightKg: this.form.value.weight,
      diet: this.form.value.diet as DietType | null,
      activity: this.form.value.activity as ActivityLevel | null,
      environment: this.form.value.environment as Environment | null,
      lifeStage: this.form.value.lifeStage as LifeStage | null,
      pregnantOrNursing: this.form.value.pregnantOrNursing === true,
    });
  }
}
