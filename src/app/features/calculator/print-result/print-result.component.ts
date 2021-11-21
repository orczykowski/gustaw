import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-print-result',
  template: '<p class="result-row">{{ this.description }} <span> {{ this.result}}</span></p>',
  styleUrls: ['./print-result.component.css']
})
export class PrintResultComponent implements OnInit {

  result = 'brak danych';

  @Input()
  description = '';

  @Input()
  amount: any | null = null;

  @Input()
  unit: any | null = '';

  ngOnInit(): void {
    if (this.amount == null) {
      this.result = 'brak danych';

    } else {
      this.result = this.amount + ' ' + this.unit;
    }
  }

}
