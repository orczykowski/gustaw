import {Component} from '@angular/core';

@Component({
    selector: 'app-heat-wave',
    templateUrl: './heat-wave.component.html',
    styleUrls: ['./heat-wave.component.css'],
    standalone: false
})
export class HeatWaveComponent {
  readonly publishedDate = '2026-06-27';
  readonly formattedDate = '27 czerwca 2026';
}