import {Injectable} from '@angular/core';
import {Organization} from './organization.model';

@Injectable({
  providedIn: 'root'
})
export class OrganizationRepositoryService {

  constructor() {
  }

  fetchOrganizations(): Array<Organization> {
    return [
      {
        name: 'Testowa',
        description: 'Lorem ipsum',
        webPage: 'www.boringstuff.pl',
        logo: 'some-logo.jpeg'
      },
      {
        name: 'Testowa2',
        description: 'Lorem ipsum',
        webPage: 'www.boringstuff2.pl',
        logo: 'some-logo2.jpeg'
      }
    ];
  }
}

