import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly baseUrl = 'https://gorczykowski.github.io/gustaw';

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  update(config: { title: string; description: string; type?: string }): void {
    const fullTitle = `${config.title} | Gustaw`;
    const url = `${this.baseUrl}${this.router.url}`;

    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: config.type ?? 'website' });
    this.setCanonical(url);
  }

  setJsonLd(schema: object): void {
    const existing = this.document.getElementById('json-ld');
    if (existing) existing.remove();
    const script = this.document.createElement('script');
    script.id = 'json-ld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }

  private setCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
