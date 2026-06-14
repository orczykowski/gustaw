import { Component, OnInit } from '@angular/core';
import {SeoService} from '../../../../core/seo.service';

@Component({
    selector: 'app-cat-at-home-positives',
    templateUrl: './cat-at-home-positives.component.html',
    styleUrls: ['./cat-at-home-positives.component.css'],
    standalone: false
})
export class CatAtHomePositivesComponent implements OnInit {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Kot jako Współlokator – Korzyści dla Zdrowia',
      description: 'Dlaczego kot to idealny współlokator? Poznaj korzyści zdrowotne i emocjonalne płynące z posiadania kota w domu.',
      type: 'article',
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': 'Kot jako Współlokator – Korzyści dla Zdrowia',
      'description': 'Dlaczego kot to idealny współlokator? Poznaj korzyści zdrowotne i emocjonalne.',
      'inLanguage': 'pl',
      'publisher': { '@type': 'Organization', 'name': 'Gustaw' },
    });
  }
}
