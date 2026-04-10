import {Injectable} from '@angular/core';
import {Organization} from './organization.model';

@Injectable({
  providedIn: 'root'
})
export class OrganizationRepositoryService {

  fetchOrganizations(): Array<Organization> {
    return [
      {
        name: 'JoKot',
        tagline: 'Fundacja na rzecz kotów',
        description: 'Zajmujemy się zapewnieniem bezdomnym kotom bezpiecznego miejsca, opieki weterynaryjnej i znalezieniem nowych domów',
        webPage: 'http://jokot.pl/',
        logo: 'jokot.png',
        location: 'Polska',
        focus: ['koty', 'adopcje', 'leczenie']
      }, {
        name: 'Rasowy kundel',
        tagline: 'Pomagamy psom znaleźć dom',
        description: 'Fundacja ratująca bezdomne i porzucone psy, zapewniająca im opiekę i szukająca odpowiedzialnych opiekunów',
        webPage: 'https://rasowykundel.pl/',
        logo: 'rasowykundel.jpeg',
        location: 'Warszawa',
        focus: ['psy', 'adopcje', 'edukacja']
      },
      {
        name: 'Buy Me a Coffee',
        tagline: 'Wsparcie',
        description: 'Podoba Ci się ta strona? Postaw mi kawę — to najlepsza motywacja do dalszego tworzenia!',
        webPage: 'https://buymeacoffee.com/tasior',
        logo: 'buymeacoffee.svg',
        location: 'Internet',
        focus: ['wsparcie', 'kawa']
      },
      {
        name: 'Schronisko w Celestynowie',
        tagline: 'TOZ Schronisko',
        description: 'Schronisko dla bezdomnych zwierząt prowadzone przez Towarzystwo Opieki nad Zwierzętami',
        webPage: 'https://celestyniaki.pl/',
        logo: 'default.png',
        location: 'Celestynów',
        focus: ['psy', 'koty', 'schronisko']
      },
      {
        name: 'Schronisko na Paluchu',
        tagline: 'Jedno z największych schronisk w Polsce',
        description: 'Część miejskiego systemu opieki nad zwierzętami. Regularne adopcje, programy wolontariackie i zmodernizowana infrastruktura poprawiająca warunki życia zwierząt.',
        webPage: 'https://napaluchu.waw.pl/',
        logo: 'paluchu.png',
        location: 'Warszawa',
        focus: ['psy', 'koty', 'schronisko', 'adopcje', 'wolontariat']
      },
      {
        name: 'Schronisko w Korabiewicach',
        tagline: 'Fundacja Viva!',
        description: 'Bardzo dobre opinie wśród wolontariuszy. Duża liczba zwierząt uratowanych z trudnych warunków — jedno z bardziej znanych prywatnych schronisk w regionie.',
        webPage: 'https://schronisko.info.pl/',
        logo: 'korabiewice.png',
        location: 'Korabiewice, Mazowsze',
        focus: ['psy', 'koty', 'schronisko', 'ratownictwo']
      },
      {
        name: 'Krakowskie Towarzystwo Opieki nad Zwierzętami',
        tagline: 'Schronisko dla Bezdomnych Zwierząt',
        description: 'Prowadzone przez organizację z długą tradycją. Aktywne programy adopcyjne, wysoka liczba pozytywnych opinii i duża aktywność wolontariatu.',
        webPage: 'https://www.schronisko.krakow.pl/',
        logo: 'ktoz.gif',
        location: 'Kraków',
        focus: ['psy', 'koty', 'schronisko', 'adopcje', 'wolontariat']
      },
      {
        name: 'Schronisko „Promyk"',
        tagline: 'Schronisko dla Bezdomnych Zwierząt',
        description: 'Dobrze zorganizowane adopcje i silne wsparcie lokalnej społeczności. Duża liczba uratowanych zwierząt rocznie.',
        webPage: 'https://schroniskopromyk.pl/',
        logo: 'promyk.jpg',
        location: 'Gdańsk',
        focus: ['psy', 'koty', 'schronisko', 'adopcje']
      },
      {
        name: 'Schronisko dla Zwierząt w Poznaniu',
        tagline: 'Miejskie schronisko',
        description: 'Stabilna działalność miejska z dużą liczbą adopcji. Rozbudowana opieka weterynaryjna i aktywny wolontariat.',
        webPage: 'https://schronisko.com/',
        logo: 'poznan.svg',
        location: 'Poznań',
        focus: ['psy', 'koty', 'schronisko', 'adopcje', 'weterynaria']
      }
    ];
  }
}

