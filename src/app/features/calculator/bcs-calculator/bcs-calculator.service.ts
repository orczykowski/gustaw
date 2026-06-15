import {Injectable} from '@angular/core';

export interface BcsInfo {
  label: string;
  interpretation: string;
  urgentVet: boolean;
  details: string[];
}

export interface BcsResult {
  bcs: number;
  currentWeightKg: number;
  idealWeightKg: number;
  weightDifferenceKg: number;
  deviationPercent: number;
  info: BcsInfo;
}

const BCS_INFO: Record<number, BcsInfo> = {
  1: {
    label: 'Poważne niedożywienie',
    interpretation: 'Żebra, kręgosłup i miednica są wyraźnie widoczne. Kot wymaga natychmiastowej konsultacji weterynaryjnej i intensywnej opieki żywieniowej.',
    urgentVet: true,
    details: [
      'Żebra, kręgosłup i miednica wyraźnie widoczne — policzalne bez dotykania',
      'Całkowity brak tkanki tłuszczowej i masy mięśniowej',
      'Sylwetka ekstremalnie wąska, brak jakiegokolwiek przewężenia talii',
      'Brzuch mocno podciągnięty, wyraźnie widoczne kości miednicy',
      'Nasada ogona: kości bardzo wyraźne, brak tłuszczu',
    ],
  },
  2: {
    label: 'Silne niedożywienie',
    interpretation: 'Minimalna tkanka tłuszczowa ze znaczną utratą mięśni. Jak najszybciej skonsultuj się z weterynarzem.',
    urgentVet: true,
    details: [
      'Żebra bardzo wyraźne, widoczne pod sierścią prawie bez dotykania',
      'Minimalna tkanka tłuszczowa, znaczna utrata masy mięśniowej',
      'Talia bardzo wyraźna, boki mocno zwężają się za żebrami',
      'Brzuch mocno podciągnięty, kości miednicy widoczne',
      'Nasada ogona: kości wyraźne, brak tłuszczu',
    ],
  },
  3: {
    label: 'Niedowaga',
    interpretation: 'Żebra łatwo wyczuwalne z bardzo małą ilością tkanki tłuszczowej. Zalecana zmiana diety.',
    urgentVet: false,
    details: [
      'Żebra bardzo łatwo wyczuwalne, częściowo widoczne pod sierścią',
      'Warstwa tłuszczu praktycznie nie występuje',
      'Talia wyraźna, boki zwężają się za żebrami',
      'Brzuch wyraźnie podkasany, brak tkanki tłuszczowej',
      'Nasada ogona: kości wyraźne, brak tłuszczu',
    ],
  },
  4: {
    label: 'Nieznaczna niedowaga',
    interpretation: 'Żebra dobrze wyczuwalne z minimalną okrywą tłuszczową. Niewielki niedobór masy ciała.',
    urgentVet: false,
    details: [
      'Żebra łatwo wyczuwalne, pokrywa je cienka warstwa tłuszczu',
      'Nie są mocno widoczne, ale nie są też ukryte',
      'Talia dobrze widoczna z góry, zwężenie naturalne',
      'Podkasanie brzucha dobrze widoczne, sylwetka wygląda lekko',
      'Cienka warstwa tłuszczu wyczuwalna na nasadzie ogona',
    ],
  },
  5: {
    label: 'Idealna kondycja',
    interpretation: 'Żebra łatwo wyczuwalne pod cienką warstwą tłuszczu. Talia widoczna z góry, lekkie podciągnięcie brzucha widoczne z boku.',
    urgentVet: false,
    details: [
      'Żebra wyczuwalne bez nacisku pod cienką warstwą tłuszczu — jak kostki grzbietowe ręki',
      'Delikatne przewężenie talii widoczne za klatką piersiową, proporcjonalna sylwetka',
      'Brzuch delikatnie unosi się ku tyłowi — prawidłowe podkasanie',
      'Może wystąpić naturalny pierwotny fałd brzuszny (primordial pouch) — nie świadczy o nadwadze',
      'Nasada ogona: kości wyczuwalne pod cienką warstwą tłuszczu',
    ],
  },
  6: {
    label: 'Nieznaczna nadwaga',
    interpretation: 'Żebra wyczuwalne, ale z wyraźniejszą warstwą tłuszczu. Talia słabo zaznaczona.',
    urgentVet: false,
    details: [
      'Żebra wyczuwalne przy lekkim nacisku, grubsza warstwa tłuszczu',
      'Talia słabo zaznaczona, sylwetka zaczyna przypominać prostokąt',
      'Podkasanie brzucha zaczyna zanikać, pojawia się niewielki fałd tłuszczowy',
      'Umiarkowany tłuszcz wyczuwalny na nasadzie ogona',
      'Tkanka tłuszczowa na brzuchu wyraźnie wyczuwalna',
    ],
  },
  7: {
    label: 'Nadwaga',
    interpretation: 'Żebra trudniejsze do wyczucia z powodu zwiększonych złogów tłuszczu. Talia niewidoczna lub bardzo słabo zaznaczona.',
    urgentVet: false,
    details: [
      'Żebra trudno wyczuć — wymagany wyraźny nacisk dłonią',
      'Znaczna ilość tkanki tłuszczowej wyczuwalna pod palcami',
      'Talia praktycznie zanika, boki zaokrąglone',
      'Brzuch niemal prosty, widoczny tłuszcz zwisający pod spodem',
      'Znaczne złogi tłuszczu na nasadzie ogona',
    ],
  },
  8: {
    label: 'Otyłość',
    interpretation: 'Żebra trudno wyczuwalne pod grubą warstwą tłuszczu. Wyraźne złogi tłuszczu na brzuchu i wokół szyi. Zalecana konsultacja weterynaryjna.',
    urgentVet: true,
    details: [
      'Żeber praktycznie nie można wyczuć — pokrywa je bardzo gruba warstwa tłuszczu',
      'Brak jakiegokolwiek przewężenia talii, sylwetka przypomina beczkę',
      'Brzuch wyraźnie zwisa, widoczne duże fałdy tłuszczu',
      'Nasada ogona mocno otłuszczona, kości trudne do wyczucia',
      'Wyraźne złogi tłuszczu na brzuchu i wokół szyi',
    ],
  },
  9: {
    label: 'Poważna otyłość',
    interpretation: 'Brak widocznej talii z nadmiernym gromadzeniem tłuszczu w całym ciele. Niezbędna natychmiastowa konsultacja weterynaryjna.',
    urgentVet: true,
    details: [
      'Żebra i kości niewyczuwalne pod masywną warstwą tłuszczu',
      'Masywne złogi tłuszczu w całym ciele, sylwetka owalna lub beczkowata',
      'Brzuch mocno zwisający, brak podkasania, ogromne fałdy tłuszczu',
      'Nasada ogona: kości praktycznie niewyczuwalne pod tłuszczem',
      'Złogi tłuszczu znacznie utrudniają ocenę i badanie kota',
    ],
  },
};

const BCS_DEVIATION: Record<number, number> = {
  1: -0.40,
  2: -0.30,
  3: -0.20,
  4: -0.10,
  5: 0,
  6: 0.125,
  7: 0.25,
  8: 0.375,
  9: 0.50,
};

@Injectable({providedIn: 'root'})
export class BcsCalculatorService {

  calculate(currentWeightKg: number, bcs: number): BcsResult {
    const deviation = BCS_DEVIATION[bcs];
    const idealWeightKg = bcs === 5 ? currentWeightKg : currentWeightKg / (1 + deviation);
    const weightDifferenceKg = currentWeightKg - idealWeightKg;

    return {
      bcs,
      currentWeightKg: this.round(currentWeightKg),
      idealWeightKg: this.round(idealWeightKg),
      weightDifferenceKg: this.round(weightDifferenceKg),
      deviationPercent: Math.round(Math.abs(deviation) * 1000) / 10,
      info: BCS_INFO[bcs],
    };
  }

  getInfo(bcs: number): BcsInfo {
    return BCS_INFO[bcs];
  }

  private round(value: number): number {
    return Math.round(value * 10) / 10;
  }
}
