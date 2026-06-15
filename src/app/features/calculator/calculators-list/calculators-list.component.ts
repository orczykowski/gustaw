import {Component} from '@angular/core';

export interface CalculatorEntry {
  route: string;
  name: string;
  description: string;
  detail: string;
}

@Component({
  selector: 'app-calculators-list',
  templateUrl: './calculators-list.component.html',
  styleUrls: ['./calculators-list.component.css'],
  standalone: false
})
export class CalculatorsListComponent {
  readonly calculators: CalculatorEntry[] = [
    {
      route: '/kalkulator',
      name: 'Zapotrzebowanie na karmę',
      description: 'Kalorie i porcje',
      detail: 'Oblicz dzienne zapotrzebowanie kaloryczne Twojego kota i dobierz odpowiednią ilość karmy suchej lub mokrej. Wynik uwzględnia wagę, wiek, aktywność i stan fizjologiczny kota.'
    },
    {
      route: '/kalkulator/woda',
      name: 'Nawodnienie',
      description: 'Dzienne zapotrzebowanie na wodę',
      detail: 'Sprawdź, ile wody dziennie potrzebuje Twój kot. Prawidłowe nawodnienie jest kluczowe dla zdrowia nerek i układu moczowego.'
    },
    {
      route: '/kalkulator/wiek',
      name: 'Wiek kota',
      description: 'Przelicz na ludzkie lata',
      detail: 'Podaj datę urodzin kota i sprawdź, ile lat miałby, gdyby był człowiekiem. Kalkulator korzysta z weterynaryjnej formuły uwzględniającej szybszy rozwój kociąt.'
    },
    {
      route: '/kalkulator/kondycja',
      name: 'Kondycja BCS',
      description: 'Ocena masy ciała metodą BCS',
      detail: 'Oceń kondycję kota w skali BCS 1–9 i oblicz jego idealną masę ciała. Metoda Body Condition Score jest stosowana przez weterynarzy do precyzyjnej oceny otłuszczenia.'
    },
    {
      route: '/kalkulator/bmi',
      name: 'BMI kota',
      description: 'Wskaźnik masy ciała',
      detail: 'Oszacuj kondycję kota na podstawie wagi i długości ciała. Feline BMI to szybki wskaźnik orientacyjny — uzupełnienie oceny BCS przeprowadzanej przez weterynarza.'
    }
  ];
}
