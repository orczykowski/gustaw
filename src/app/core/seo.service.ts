import { inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);

  init(): void {
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe(() => {
      const leaf = this.deepestRoute(this.route);
      const data = leaf.snapshot.data;
      const title: string = leaf.snapshot.title ?? 'Gustaw – Portal o Kotach';
      const description: string = data['description'] ?? 'Gustaw – wszystko o kotach. Kalkulator karmienia, artykuły o zdrowiu i diecie oraz polskie organizacje pomocowe dla zwierząt.';
      const canonical: string = data['canonical'] ?? 'https://orczykowski.github.io/gustaw/';
      const type: string = data['type'] ?? 'website';
      const image: string = data['image'] ?? 'https://orczykowski.github.io/gustaw/assets/2.webp';

      this.title.setTitle(title);
      this.meta.updateTag({ name: 'description', content: description });
      this.meta.updateTag({ property: 'og:title', content: title });
      this.meta.updateTag({ property: 'og:description', content: description });
      this.meta.updateTag({ property: 'og:url', content: canonical });
      this.meta.updateTag({ property: 'og:type', content: type });
      this.meta.updateTag({ property: 'og:image', content: image });
      this.meta.updateTag({ name: 'twitter:title', content: title });
      this.meta.updateTag({ name: 'twitter:description', content: description });
      this.updateCanonical(canonical);

      const existing = this.document.getElementById('json-ld');
      if (existing) existing.remove();
      if (data['jsonLd']) {
        const script = this.document.createElement('script');
        script.id = 'json-ld';
        script.type = 'application/ld+json';
        script.text = JSON.stringify(data['jsonLd']);
        this.document.head.appendChild(script);
      }
    });
  }

  private deepestRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) route = route.firstChild;
    return route;
  }

  private updateCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
