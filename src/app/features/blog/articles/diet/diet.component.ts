import {Component} from '@angular/core';

@Component({
    selector: 'app-diet',
    templateUrl: './diet.component.html',
    styleUrls: ['./diet.component.css'],
    standalone: false
})
export class DietComponent {
  readonly publishedDate = '2021-11-21';
  readonly formattedDate = '21 listopada 2021';
}
