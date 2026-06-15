import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './features/blog/blog.component';
import {FoodCalculatorComponent} from './features/calculator/food-requirement-calculator/food-calculator.component';
import {AgeCalculatorComponent} from './features/calculator/age-calculator/age-calculator.component';
import {BcsCalculatorComponent} from './features/calculator/bcs-calculator/bcs-calculator.component';
import {WaterCalculatorComponent} from './features/calculator/water-calculator/water-calculator.component';
import {OrganizationsComponent} from './features/organizations/organizations.component';
import {WelcomePageComponent} from './features/welcome-page/welcome-page.component';
import {SafeBalconyComponent} from './features/blog/articles/safe-balcony/safe-balcony.component';
import {DietComponent} from './features/blog/articles/diet/diet.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment.prod';
import {CatAtHomePositivesComponent} from './features/blog/articles/cat-at-home-positives/cat-at-home-positives.component';
import {CatSoundsComponent} from './features/blog/articles/cat-sounds/cat-sounds.component';
import {BmiCalculatorComponent} from './features/calculator/bmi-calculator/bmi-calculator.component';
import {CalculatorsListComponent} from './features/calculator/calculators-list/calculators-list.component';

const BASE = 'https://orczykowski.github.io/gustaw';

const routes: Routes = [
  {
    path: '',
    component: WelcomePageComponent,
    title: 'Gustaw – Portal o Kotach',
    data: {
      description: 'Gustaw – wszystko o kotach. Kalkulator karmienia, artykuły o zdrowiu i diecie oraz polskie organizacje pomocowe dla zwierząt.',
      canonical: `${BASE}/`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Gustaw',
        'url': `${BASE}/`,
        'description': 'Portal o kotach – kalkulator karmienia, artykuły i katalog organizacji pomocowych.',
        'inLanguage': 'pl',
      },
    },
  },
  {
    path: 'kalkulatory',
    component: CalculatorsListComponent,
    title: 'Kalkulatory dla kota | Gustaw',
    data: {
      description: 'Zestaw kalkulatorów dla właścicieli kotów — kalorie, nawodnienie, wiek, kondycja BCS i BMI. Narzędzia dopasowane do Twojego kota.',
      canonical: `${BASE}/kalkulatory`,
    },
  },
  {path: 'kalkulator', redirectTo: 'kalkulator/karma', pathMatch: 'full'},
  {
    path: 'kalkulator/karma',
    component: FoodCalculatorComponent,
    title: 'Kalkulator karmy dla kota – kalorie i porcje | Gustaw',
    data: {
      description: 'Oblicz dzienne zapotrzebowanie kaloryczne kota i porcje karmy. Uwzględnia wagę, wiek, płeć, sterylizację i tryb życia.',
      canonical: `${BASE}/kalkulator/karma`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        'name': 'Kalkulator karmy dla kota',
        'applicationCategory': 'HealthApplication',
        'operatingSystem': 'Web',
        'url': `${BASE}/kalkulator/karma`,
        'description': 'Oblicz dzienne zapotrzebowanie kaloryczne kota i porcje karmy. Uwzględnia wagę, wiek, płeć, sterylizację i tryb życia.',
        'inLanguage': 'pl',
        'offers': {'@type': 'Offer', 'price': '0', 'priceCurrency': 'PLN'},
      },
    },
  },
  {
    path: 'kalkulator/wiek',
    component: AgeCalculatorComponent,
    title: 'Kalkulator wieku kota | Gustaw',
    data: {
      description: 'Przelicz wiek swojego kota na ludzkie lata. Podaj datę urodzin kota i sprawdź, ile lat miałby, gdyby był człowiekiem.',
      canonical: `${BASE}/kalkulator/wiek`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        'name': 'Kalkulator wieku kota',
        'applicationCategory': 'HealthApplication',
        'operatingSystem': 'Web',
        'url': `${BASE}/kalkulator/wiek`,
        'description': 'Przelicz wiek swojego kota na ludzkie lata. Podaj datę urodzin kota i sprawdź, ile lat miałby, gdyby był człowiekiem.',
        'inLanguage': 'pl',
        'offers': {'@type': 'Offer', 'price': '0', 'priceCurrency': 'PLN'},
      },
    },
  },
  {
    path: 'kalkulator/kondycja',
    component: BcsCalculatorComponent,
    title: 'Kalkulator kondycji kota (BCS) | Gustaw',
    data: {
      description: 'Oceń kondycję swojego kota i oblicz jego idealną masę ciała na podstawie wskaźnika BCS (Body Condition Score).',
      canonical: `${BASE}/kalkulator/kondycja`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        'name': 'Kalkulator kondycji kota (BCS)',
        'applicationCategory': 'HealthApplication',
        'operatingSystem': 'Web',
        'url': `${BASE}/kalkulator/kondycja`,
        'description': 'Oceń kondycję swojego kota i oblicz jego idealną masę ciała na podstawie wskaźnika BCS (Body Condition Score).',
        'inLanguage': 'pl',
        'offers': {'@type': 'Offer', 'price': '0', 'priceCurrency': 'PLN'},
      },
    },
  },
  {
    path: 'kalkulator/woda',
    component: WaterCalculatorComponent,
    title: 'Kalkulator nawodnienia kota | Gustaw',
    data: {
      description: 'Oblicz dzienne zapotrzebowanie swojego kota na wodę uwzględniając wagę, dietę, aktywność i warunki środowiskowe.',
      canonical: `${BASE}/kalkulator/woda`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        'name': 'Kalkulator nawodnienia kota',
        'applicationCategory': 'HealthApplication',
        'operatingSystem': 'Web',
        'url': `${BASE}/kalkulator/woda`,
        'description': 'Oblicz dzienne zapotrzebowanie swojego kota na wodę uwzględniając wagę, dietę, aktywność i warunki środowiskowe.',
        'inLanguage': 'pl',
        'offers': {'@type': 'Offer', 'price': '0', 'priceCurrency': 'PLN'},
      },
    },
  },
  {
    path: 'kalkulator/bmi',
    component: BmiCalculatorComponent,
    title: 'Kalkulator BMI kota | Gustaw',
    data: {
      description: 'Oblicz wskaźnik BMI swojego kota na podstawie wagi i długości ciała. Sprawdź, czy twój kot ma prawidłową masę ciała.',
      canonical: `${BASE}/kalkulator/bmi`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        'name': 'Kalkulator BMI kota',
        'applicationCategory': 'HealthApplication',
        'operatingSystem': 'Web',
        'url': `${BASE}/kalkulator/bmi`,
        'description': 'Oblicz wskaźnik BMI swojego kota na podstawie wagi i długości ciała. Sprawdź, czy twój kot ma prawidłową masę ciała.',
        'inLanguage': 'pl',
        'offers': {'@type': 'Offer', 'price': '0', 'priceCurrency': 'PLN'},
      },
    },
  },
  {
    path: 'warto-wspierac',
    component: OrganizationsComponent,
    title: 'Organizacje dla Zwierząt w Polsce | Gustaw',
    data: {
      description: 'Lista polskich organizacji i schronisk, które warto wspierać. Pomóż zwierzętom – adoptuj, wolontariuj lub przekaż darowiznę.',
      canonical: `${BASE}/warto-wspierac`,
    },
  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'Artykuły o Kotach | Gustaw',
    data: {
      description: 'Artykuły o kotach: dieta, terytorium, zdrowie i codzienna pielęgnacja. Porady pisane z myślą o właścicielach kotów.',
      canonical: `${BASE}/blog`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {'@type': 'ListItem', 'position': 1, 'name': 'Strona główna', 'item': `${BASE}/`},
          {'@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': `${BASE}/blog`},
        ],
      },
    },
  },
  {
    path: 'blog/kocie-terytorium',
    component: SafeBalconyComponent,
    title: 'Bezpieczne Kocie Terytorium – Balkon i Okna | Gustaw',
    data: {
      description: 'Jak bezpiecznie powiększyć kocie terytorium w mieszkaniu? Porady dotyczące balkonów, okien i aranżacji przestrzeni dla kota.',
      canonical: `${BASE}/blog/kocie-terytorium`,
      type: 'article',
      image: `${BASE}/assets/articles/kocie-terytoritum-header.jpeg`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Article',
            'headline': 'Bezpieczne Kocie Terytorium – Balkon i Okna',
            'description': 'Jak bezpiecznie powiększyć kocie terytorium w mieszkaniu?',
            'inLanguage': 'pl',
            'datePublished': '2021-11-21',
            'dateModified': '2021-11-21',
            'image': `${BASE}/assets/articles/kocie-terytoritum-header.jpeg`,
            'mainEntityOfPage': `${BASE}/blog/kocie-terytorium`,
            'author': {'@type': 'Organization', 'name': 'Gustaw'},
            'publisher': {'@type': 'Organization', 'name': 'Gustaw', 'logo': {'@type': 'ImageObject', 'url': `${BASE}/assets/logo.png`}},
          },
          {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {'@type': 'ListItem', 'position': 1, 'name': 'Gustaw', 'item': `${BASE}/`},
              {'@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': `${BASE}/blog`},
              {'@type': 'ListItem', 'position': 3, 'name': 'Bezpieczne Kocie Terytorium', 'item': `${BASE}/blog/kocie-terytorium`},
            ],
          },
        ],
      },
    },
  },
  {
    path: 'blog/dieta',
    component: DietComponent,
    title: 'Kocia Dieta – Sucha, Mokra, BARF i Weterynaryjna | Gustaw',
    data: {
      description: 'Przewodnik po kocich dietach: sucha karma, mokra karma, BARF i dieta weterynaryjna. Jak wybrać najlepsze żywienie dla kota?',
      canonical: `${BASE}/blog/dieta`,
      type: 'article',
      image: `${BASE}/assets/articles/kocia-dieta-header.jpeg`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Article',
            'headline': 'Kocia Dieta – Sucha, Mokra, BARF i Weterynaryjna',
            'description': 'Przewodnik po kocich dietach: sucha karma, mokra karma, BARF i dieta weterynaryjna.',
            'inLanguage': 'pl',
            'datePublished': '2021-11-21',
            'dateModified': '2021-11-21',
            'image': `${BASE}/assets/articles/kocia-dieta-header.jpeg`,
            'mainEntityOfPage': `${BASE}/blog/dieta`,
            'author': {'@type': 'Organization', 'name': 'Gustaw'},
            'publisher': {'@type': 'Organization', 'name': 'Gustaw', 'logo': {'@type': 'ImageObject', 'url': `${BASE}/assets/logo.png`}},
          },
          {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {'@type': 'ListItem', 'position': 1, 'name': 'Gustaw', 'item': `${BASE}/`},
              {'@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': `${BASE}/blog`},
              {'@type': 'ListItem', 'position': 3, 'name': 'Kocia Dieta', 'item': `${BASE}/blog/dieta`},
            ],
          },
        ],
      },
    },
  },
  {
    path: 'blog/kot-idealny-wspolokator',
    component: CatAtHomePositivesComponent,
    title: 'Kot jako Współlokator – Korzyści dla Zdrowia | Gustaw',
    data: {
      description: 'Dlaczego kot to idealny współlokator? Poznaj korzyści zdrowotne i emocjonalne płynące z posiadania kota w domu.',
      canonical: `${BASE}/blog/kot-idealny-wspolokator`,
      type: 'article',
      image: `${BASE}/assets/articles/kot-w-domu-header.jpeg`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Article',
            'headline': 'Kot jako Współlokator – Korzyści dla Zdrowia',
            'description': 'Dlaczego kot to idealny współlokator? Poznaj korzyści zdrowotne i emocjonalne.',
            'inLanguage': 'pl',
            'datePublished': '2023-06-18',
            'dateModified': '2023-06-18',
            'image': `${BASE}/assets/articles/kot-w-domu-header.jpeg`,
            'mainEntityOfPage': `${BASE}/blog/kot-idealny-wspolokator`,
            'author': {'@type': 'Organization', 'name': 'Gustaw'},
            'publisher': {'@type': 'Organization', 'name': 'Gustaw', 'logo': {'@type': 'ImageObject', 'url': `${BASE}/assets/logo.png`}},
          },
          {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {'@type': 'ListItem', 'position': 1, 'name': 'Gustaw', 'item': `${BASE}/`},
              {'@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': `${BASE}/blog`},
              {'@type': 'ListItem', 'position': 3, 'name': 'Kot jako Współlokator', 'item': `${BASE}/blog/kot-idealny-wspolokator`},
            ],
          },
        ],
      },
    },
  },
  {
    path: 'blog/dlaczego-koty-mrucza',
    component: CatSoundsComponent,
    title: 'Dlaczego Koty Mruczą? | Gustaw',
    data: {
      description: 'Dlaczego koty mruczą? Odkryj mechanizm mruczenia i co tak naprawdę oznacza, gdy Twój kot mruczy.',
      canonical: `${BASE}/blog/dlaczego-koty-mrucza`,
      type: 'article',
      image: `${BASE}/assets/articles/cat-sounds-header.jpeg`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Article',
            'headline': 'Dlaczego koty mruczą?',
            'description': 'Odkryj mechanizm mruczenia i co tak naprawdę oznacza, gdy Twój kot mruczy.',
            'inLanguage': 'pl',
            'datePublished': '2024-09-16',
            'dateModified': '2024-09-16',
            'image': `${BASE}/assets/articles/cat-sounds-header.jpeg`,
            'mainEntityOfPage': `${BASE}/blog/dlaczego-koty-mrucza`,
            'author': {'@type': 'Organization', 'name': 'Gustaw'},
            'publisher': {'@type': 'Organization', 'name': 'Gustaw', 'logo': {'@type': 'ImageObject', 'url': `${BASE}/assets/logo.png`}},
          },
          {
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {'@type': 'ListItem', 'position': 1, 'name': 'Gustaw', 'item': `${BASE}/`},
              {'@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': `${BASE}/blog`},
              {'@type': 'ListItem', 'position': 3, 'name': 'Dlaczego Koty Mruczą', 'item': `${BASE}/blog/dlaczego-koty-mrucza`},
            ],
          },
        ],
      },
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
