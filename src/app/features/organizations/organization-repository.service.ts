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
        name: 'Schronisko w Celestynowie',
        tagline: 'TOZ Schronisko',
        description: 'Schronisko dla bezdomnych zwierząt prowadzone przez Towarzystwo Opieki nad Zwierzętami',
        webPage: 'https://celestyniaki.pl/',
        logo: 'default.png',
        location: 'Celestynów',
        focus: ['psy', 'koty', 'schronisko']
      }
    ];
  }
}

