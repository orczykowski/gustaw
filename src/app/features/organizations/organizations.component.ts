import {Component, OnInit} from '@angular/core';
import {Organization} from './organization.model';
import {OrganizationRepositoryService} from './organization-repository.service';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {
  organizations: Array<Organization> = new Array<Organization>();

  constructor(private organizationRepository: OrganizationRepositoryService) {
  }

  ngOnInit(): void {
    this.organizations = this.organizationRepository.fetchOrganizations();
  }

}
