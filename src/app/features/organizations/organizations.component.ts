import {Component, OnInit} from '@angular/core';
import {Organization} from './organization.model';
import {OrganizationRepositoryService} from './organization-repository.service';
import {SeoService} from '../../core/seo.service';

@Component({
    selector: 'app-organizations',
    templateUrl: './organizations.component.html',
    styleUrls: ['./organizations.component.css'],
    standalone: false
})
export class OrganizationsComponent implements OnInit {
  organizations: Array<Organization> = new Array<Organization>();

  constructor(
    private organizationRepository: OrganizationRepositoryService,
    private seo: SeoService,
  ) {
  }

  ngOnInit(): void {
    this.organizations = this.organizationRepository.fetchOrganizations();
    this.seo.update({
      title: 'Organizacje dla Zwierząt w Polsce',
      description: 'Lista polskich organizacji i schronisk, które warto wspierać. Pomóż zwierzętom – adoptuj, wolontariuj lub przekaż darowiznę.',
    });
  }
}
