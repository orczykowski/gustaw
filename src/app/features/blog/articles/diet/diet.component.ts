import {Component, OnInit} from '@angular/core';
import {SeoService} from '../../../../core/seo.service';

@Component({
    selector: 'app-diet',
    templateUrl: './diet.component.html',
    styleUrls: ['./diet.component.css'],
    standalone: false
})
export class DietComponent implements OnInit {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Kocia Dieta – Sucha, Mokra, BARF i Weterynaryjna',
      description: 'Przewodnik po kocich dietach: sucha karma, mokra karma, BARF i dieta weterynaryjna. Jak wybrać najlepsze żywienie dla kota?',
      type: 'article',
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Kocia Dieta – Sucha, Mokra, BARF i Weterynaryjna',
      'description': 'Przewodnik po kocich dietach: sucha karma, mokra karma, BARF i dieta weterynaryjna.',
      'inLanguage': 'pl',
      'publisher': { '@type': 'Organization', 'name': 'Gustaw' },
    });
  }
}
