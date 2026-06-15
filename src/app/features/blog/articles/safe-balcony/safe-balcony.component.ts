import {Component} from '@angular/core';

@Component({
    selector: 'app-safe-balcony',
    templateUrl: './safe-balcony.component.html',
    styleUrls: ['./safe-balcony.component.css'],
    standalone: false
})
export class SafeBalconyComponent {
  readonly publishedDate = '2021-11-21';
  readonly formattedDate = '21 listopada 2021';
}
