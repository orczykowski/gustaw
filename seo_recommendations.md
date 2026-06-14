# SEO Recommendations — Gustaw App

Audit date: 2026-06-14  
App: Polish-language Angular 16 SPA about cat care  
Deployment: GitHub Pages at `/gustaw/`  
Rendering: Client-Side Rendering only (no SSR, no prerendering)

---

## Critical Issues

---

### [HIGH] No meta descriptions on any page

**Location:** `src/index.html`, all feature components  
**Issue:** The `<head>` contains no `<meta name="description">` tag. Google generates a snippet from page body text, which is unpredictable and usually worse than a hand-crafted description. Every page shares the same bare minimum `<head>`.  
**Fix:** Use Angular's `Meta` service in each route component to inject a unique description on init.

```ts
// src/app/features/welcome-page/welcome-page.component.ts
constructor(private meta: Meta) {}

ngOnInit() {
  this.meta.updateTag({
    name: 'description',
    content: 'Gustaw – portal o kotach. Oblicz zapotrzebowanie kaloryczne swojego kota, czytaj artykuły i wspieraj polskie schroniska.'
  });
}
```

Target descriptions per page (120–160 characters):

| Route | Recommended description |
|---|---|
| `/` | Gustaw – wszystko o kotach. Kalkulator karmienia, artykuły o zdrowiu i diecie oraz polskie organizacje pomocowe dla zwierząt. |
| `/kalkulator` | Oblicz dzienne zapotrzebowanie kaloryczne i porcje jedzenia dla swojego kota. Szybki kalkulator uwzględniający wagę, wiek i tryb życia. |
| `/blog` | Artykuły o kotach: dieta, terytorium, zdrowie i codzienna pielęgnacja. Porady pisane z myślą o właścicielach kotów. |
| `/blog/dieta` | Przewodnik po kocich dietach: sucha karma, mokra karma, BARF i dieta weterynaryjna. Jak wybrać najlepsze żywienie dla kota? |
| `/blog/kocie-terytorium` | Jak bezpiecznie powiększyć kocie terytorium w mieszkaniu? Porady dotyczące balkonów, okien i aranżacji przestrzeni dla kota. |
| `/blog/kot-idealny-wspolokator` | Dlaczego kot to idealny współlokator? Poznaj korzyści zdrowotne i emocjonalne płynące z posiadania kota w domu. |
| `/blog/dlaczego-koty-mrucza` | Dlaczego koty mruczą? Odkryj mechanizm mruczenia i co tak naprawdę oznacza, gdy Twój kot mruczy. |
| `/warto-wspierac` | Lista polskich organizacji i schronisk, które warto wspierać. Pomóż zwierzętom – adoptuj, wolontariuj lub przekaż darowiznę. |

---

### [HIGH] No dynamic page titles — every page shows "Gustaw"

**Location:** `src/index.html:4`, all feature components  
**Issue:** `<title>Gustaw</title>` is static. Every tab, search result, and bookmark shows the same text. Google uses the title as the primary relevance signal for ranking.  
**Fix:** Use Angular's `Title` service in each route component.

```ts
// example for the diet article
constructor(private title: Title, private meta: Meta) {}

ngOnInit() {
  this.title.setTitle('Kocia dieta – sucha, mokra, BARF i weterynaryjna | Gustaw');
}
```

Recommended title format: `Primary Topic – Specific Modifier | Gustaw` (50–60 characters).

| Route | Recommended title |
|---|---|
| `/` | Gustaw – Portal o Kotach |
| `/kalkulator` | Kalkulator Karmienia Kota – Kalorie i Porcje \| Gustaw |
| `/blog` | Artykuły o Kotach \| Gustaw |
| `/blog/dieta` | Kocia Dieta – Sucha, Mokra, BARF \| Gustaw |
| `/blog/kocie-terytorium` | Bezpieczne Kocie Terytorium – Balkon i Okna \| Gustaw |
| `/blog/kot-idealny-wspolokator` | Kot jako Współlokator – Korzyści dla Zdrowia \| Gustaw |
| `/blog/dlaczego-koty-mrucza` | Dlaczego Koty Mruczą? \| Gustaw |
| `/warto-wspierac` | Organizacje dla Zwierząt w Polsce \| Gustaw |

---

### [HIGH] No structured data (JSON-LD / schema.org)

**Location:** All components — none contain structured data  
**Issue:** Google cannot understand the content type of any page. Article pages, the calculator, and the charity directory all lack schema markup. This blocks rich results (article dates, breadcrumbs, FAQ snippets).  
**Fix:** Add JSON-LD blocks per page type. Inject them dynamically using a helper that appends a `<script type="application/ld+json">` element.

**Homepage — Organization schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Gustaw",
  "url": "https://gorczykowski.github.io/gustaw/",
  "description": "Portal o kotach – kalkulator karmienia, artykuły i katalog organizacji pomocowych.",
  "inLanguage": "pl"
}
```

**Each blog article — Article schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Kocia dieta – sucha, mokra, BARF i weterynaryjna",
  "description": "Kilka słów o kociej diecie",
  "inLanguage": "pl",
  "publisher": {
    "@type": "Organization",
    "name": "Gustaw"
  }
}
```

**Blog listing page — BreadcrumbList:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://gorczykowski.github.io/gustaw/" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://gorczykowski.github.io/gustaw/blog" }
  ]
}
```

---

### [HIGH] No robots.txt or sitemap.xml

**Location:** Project root, `docs/` directory  
**Issue:** Googlebot has no crawl instructions. All pages must be discovered through links alone. Missing sitemap means new articles may take weeks to be indexed.  
**Fix:** Create both files and place them in `src/` so Angular CLI copies them to `docs/` on build (add to `assets` in `angular.json`).

**`src/robots.txt`:**
```
User-agent: *
Allow: /

Sitemap: https://gorczykowski.github.io/gustaw/sitemap.xml
```

**`src/sitemap.xml`:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/0.5/sitemaps">
  <url><loc>https://gorczykowski.github.io/gustaw/</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>
  <url><loc>https://gorczykowski.github.io/gustaw/kalkulator</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://gorczykowski.github.io/gustaw/blog</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://gorczykowski.github.io/gustaw/blog/dieta</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://gorczykowski.github.io/gustaw/blog/kocie-terytorium</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://gorczykowski.github.io/gustaw/blog/kot-idealny-wspolokator</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://gorczykowski.github.io/gustaw/blog/dlaczego-koty-mrucza</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://gorczykowski.github.io/gustaw/warto-wspierac</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
</urlset>
```

Add to `angular.json` under `assets`:
```json
{ "glob": "robots.txt", "input": "src/", "output": "/" },
{ "glob": "sitemap.xml", "input": "src/", "output": "/" }
```

---

### [HIGH] Wrong `lang` attribute — Polish content marked as English

**Location:** `src/index.html:2`  
**Issue:** `<html lang="en">` — the entire app is in Polish. Search engines use this attribute to determine language and target the right audience. Wrong value can cause Google to mismatch the page to non-Polish search queries.  
**Fix:**
```html
<html lang="pl">
```

---

## Medium Issues

---

### [MEDIUM] Broken heading hierarchy across all article pages

**Location:** All article components under `src/app/features/blog/articles/`  
**Issue:** Every article starts with `<h2>` as the first heading. There is no `<h1>` in the article template itself. The global header contains `<h1>Gustaw</h1>`, but that is the site logo, not the page topic. Google treats H1 as the clearest signal of what a page is about.

Additionally:
- `OrganizationsComponent` jumps from `<h1>` directly to `<h3>` for organization names (skips H2)
- `WelcomePageComponent` jumps from `<h1>` to `<h3>` for section titles (skips H2)
- `FoodCalculatorComponent` has two `<h1>` tags (one in main view, one in result modal)

**Fix per component:**

| Component | Current | Fix |
|---|---|---|
| All articles | `<h2>` as page title | Change to `<h1>` |
| `organizations.component.html` | `<h3>` for org names | Change to `<h2>` |
| `welcome-page.component.html` | `<h3>` for section titles | Change to `<h2>` |
| `food-calculator.component.html` | Second `<h1>` in modal | Change to `<h2>` |

---

### [MEDIUM] No Open Graph or Twitter Card meta tags

**Location:** `src/index.html`  
**Issue:** When someone shares a Gustaw link on Facebook, Twitter/X, or WhatsApp, no image, title, or description appears. Social sharing is a significant referral source for a lifestyle/pet topic site.  
**Fix:** Add base OG tags in `index.html` and override them per page using `Meta` service:

```html
<!-- In src/index.html <head> -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="Gustaw">
<meta property="og:locale" content="pl_PL">
<meta property="og:image" content="https://gorczykowski.github.io/gustaw/assets/og-cover.jpg">
<meta name="twitter:card" content="summary_large_image">
```

Then override `og:title`, `og:description`, and `og:url` per route using `Meta.updateTag()`.

---

### [MEDIUM] SPA with client-side rendering — pages may not index reliably

**Location:** `angular.json`  
**Issue:** The app is a pure SPA. While Googlebot can render JavaScript, it does so with a delay and lower priority. Other crawlers (Bing, social media bots) often cannot. For a content-focused site (blog articles, catalog), this limits discoverability.  
**Fix options (in order of effort):**

1. **Angular Prerendering (recommended):** Add `@angular/ssr` and configure `prerender` in `angular.json` for static routes. This generates real HTML files during `ng build` — ideal for GitHub Pages.
2. **Partial prerendering:** Prerender only blog article routes; leave calculator as SPA.
3. **Keep SPA + add meta tags:** Minimum viable — at least title/description/OG will be in the raw HTML served to crawlers that can't execute JS.

---

### [MEDIUM] Vague article descriptions in repository

**Location:** `src/app/features/blog/article-repository.service.ts`  
**Issue:** Article descriptions are placeholder-quality: `"mrrrrrr ..."` and `"Już niebawem"`. These descriptions are used in the blog listing and could map to meta descriptions.  
**Fix:** Replace with accurate, keyword-relevant summaries:

| Article | Current description | Recommended |
|---|---|---|
| Dlaczego koty mruczą | "mrrrrrr ..." | "Poznaj mechanizm mruczenia kota – skąd pochodzi ten dźwięk i co oznacza dla właściciela." |
| Jak pies z kotem | "Już niebawem" | Remove from listing until article is ready, or mark as `draft: true` and filter in template |

---

### [MEDIUM] Placeholder article exposed in navigation

**Location:** `src/app/features/blog/article-repository.service.ts`  
**Issue:** "Jak pies z kotem. Czyli jak?" has an empty URL and no content. It appears in the blog listing as a dead entry. Google may crawl or index a page that leads nowhere, wasting crawl budget and creating a poor user signal.  
**Fix:** Filter out unpublished articles in `BlogComponent` by checking for a non-empty URL, or add a `published: boolean` field to the article model.

---

## Low Priority Issues

---

### [LOW] No canonical tags

**Location:** `src/index.html`  
**Issue:** GitHub Pages serves the app at `/gustaw/`. Without a canonical tag, if the same content is accessible at multiple URLs (e.g., with/without trailing slash), Google may treat them as duplicates and split ranking signals.  
**Fix:** Add a self-referencing canonical per page:

```ts
// In each component
const link = document.createElement('link');
link.setAttribute('rel', 'canonical');
link.setAttribute('href', `https://gorczykowski.github.io/gustaw${this.router.url}`);
document.head.appendChild(link);
```

Or use a shared `SeoService` to handle title, meta, OG, and canonical in one place.

---

### [LOW] No `loading="lazy"` on below-the-fold images

**Location:** `welcome-page.component.html`, `blog.component.html`, `organizations` templates  
**Issue:** Images in the welcome page cards and blog listing load eagerly by default. This adds to initial page weight and can hurt LCP and INP scores.  
**Fix:** Add `loading="lazy"` to all images that are not the hero/above-the-fold element:

```html
<img src="assets/3.jpeg" alt="Do czytania" loading="lazy">
```

---

### [LOW] Typos in visible heading text

**Location:**
- `organizations.component.html` — `"Orgaznizacje"` → should be `"Organizacje"`
- `food-calculator.component.html` — `"Paramtry obecnej karmy"` → should be `"Parametry obecnej karmy"`

**Issue:** Typos in headings reduce content credibility and may interfere with keyword matching.  
**Fix:** Correct both strings in their respective template files.

---

### [LOW] No preload for hero images

**Location:** `src/index.html`  
**Issue:** The welcome page hero image is not preloaded. It is the Largest Contentful Paint (LCP) candidate on the home page. Without a preload hint, the browser discovers it late — after parsing HTML and CSS.  
**Fix:**
```html
<link rel="preload" as="image" href="assets/1.jpeg">
```

(Add only for the above-the-fold hero image on the homepage.)

---

## Recommended Implementation Order

| Priority | Task | Effort | Impact |
|---|---|---|---|
| 1 | Add `lang="pl"` to `<html>` | 1 min | High |
| 2 | Fix typos in headings | 5 min | Low/Medium |
| 3 | Fix heading hierarchy (articles H2→H1, orgs/welcome H3→H2, modal H1→H2) | 30 min | Medium |
| 4 | Create `robots.txt` + `sitemap.xml`, wire up in `angular.json` | 30 min | High |
| 5 | Implement `SeoService` (title + meta + OG + canonical) and call from each route component | 2 h | High |
| 6 | Add JSON-LD structured data (homepage org, articles, breadcrumbs) | 2 h | Medium |
| 7 | Update article descriptions in repository | 15 min | Medium |
| 8 | Hide/filter unpublished "Jak pies z kotem" article | 30 min | Medium |
| 9 | Add `loading="lazy"` to images | 20 min | Low |
| 10 | Add hero image preload hint | 5 min | Low |
| 11 | Add base OG + Twitter Card tags | 30 min | Medium |
| 12 | Investigate Angular Prerendering for blog routes | 1 day | High (long term) |