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
        description: 'Fundacja pomagająca bezdomnym kotom',
        webPage: 'http://jokot.pl/',
        logo: 'jokot.png'
      }, {
        name: 'Rasowy kundel',
        description: 'Fundacja pomagająca bezdomnym psom',
        webPage: 'https://rasowykundel.org/',
        logo: 'rasowykundel.jpeg'
      },
      {
        name: 'Schronisko w celystenowie',
        description: 'Schornisko dla bezdomnych zwierząt',
        webPage: 'http://www.celestynow.toz.pl/',
        logo: 'default.png'
      }
    ];
  }
}

