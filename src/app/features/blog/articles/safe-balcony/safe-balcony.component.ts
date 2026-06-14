import {Component, OnInit} from '@angular/core';
import {SeoService} from '../../../../core/seo.service';

@Component({
    selector: 'app-safe-balcony',
    templateUrl: './safe-balcony.component.html',
    styleUrls: ['./safe-balcony.component.css'],
    standalone: false
})
export class SafeBalconyComponent implements OnInit {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Bezpieczne Kocie Terytorium – Balkon i Okna',
      description: 'Jak bezpiecznie powiększyć kocie terytorium w mieszkaniu? Porady dotyczące balkonów, okien i aranżacji przestrzeni dla kota.',
      type: 'article',
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Bezpieczne Kocie Terytorium – Balkon i Okna',
      'description': 'Jak bezpiecznie powiększyć kocie terytorium w mieszkaniu?',
      'inLanguage': 'pl',
      'publisher': { '@type': 'Organization', 'name': 'Gustaw' },
    });
  }
}
