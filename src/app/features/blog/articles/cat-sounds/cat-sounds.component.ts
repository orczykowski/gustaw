import {Component} from '@angular/core';

@Component({
    selector: 'app-cat-sounds',
    templateUrl: './cat-sounds.component.html',
    styleUrls: ['./cat-sounds.component.css'],
    standalone: false
})
export class CatSoundsComponent {
  readonly publishedDate = '2024-09-16';
  readonly formattedDate = '16 września 2024';
}
