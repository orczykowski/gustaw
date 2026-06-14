import { Component, OnInit } from '@angular/core';
import {SeoService} from '../../../../core/seo.service';

@Component({
    selector: 'app-cat-sounds',
    templateUrl: './cat-sounds.component.html',
    styleUrls: ['./cat-sounds.component.css'],
    standalone: false
})
export class CatSoundsComponent implements OnInit {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Dlaczego Koty Mruczą?',
      description: 'Dlaczego koty mruczą? Odkryj mechanizm mruczenia i co tak naprawdę oznacza, gdy Twój kot mruczy.',
      type: 'article',
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Dlaczego koty mruczą?',
      'description': 'Odkryj mechanizm mruczenia i co tak naprawdę oznacza, gdy Twój kot mruczy.',
      'inLanguage': 'pl',
      'publisher': { '@type': 'Organization', 'name': 'Gustaw' },
    });
  }
}
