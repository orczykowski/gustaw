import {Component, Input, OnInit} from '@angular/core';
import {Organization} from '../organization.model';

@Component({
  selector: 'app-organization-info',
  templateUrl: './organization-info.component.html',
  styleUrls: ['./organization-info.component.css']
})
export class OrganizationInfoComponent {
  @Input()
  organization: Organization | null = null;

}
