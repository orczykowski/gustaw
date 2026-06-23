import {Component} from '@angular/core';

@Component({
    selector: 'app-dog-and-cat',
    templateUrl: './dog-and-cat.component.html',
    styleUrls: ['./dog-and-cat.component.css'],
    standalone: false
})
export class DogAndCatComponent {
  readonly publishedDate = '2026-06-24';
  readonly formattedDate = '24 czerwca 2026';
}
