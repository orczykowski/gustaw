import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../core/seo.service';

@Component({
    selector: 'app-welcome-page',
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.css'],
    standalone: false
})
export class WelcomePageComponent implements OnInit {

  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update({
      title: 'Gustaw – Portal o Kotach',
      description: 'Gustaw – wszystko o kotach. Kalkulator karmienia, artykuły o zdrowiu i diecie oraz polskie organizacje pomocowe dla zwierząt.',
    });
    this.seo.setJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Gustaw',
      'url': 'https://gorczykowski.github.io/gustaw/',
      'description': 'Portal o kotach – kalkulator karmienia, artykuły i katalog organizacji pomocowych.',
      'inLanguage': 'pl',
    });
  }
}
