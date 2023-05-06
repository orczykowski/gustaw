import {Injectable, Input} from '@angular/core';
import {FoodRequirementReport} from './food-requirement-report';
import {DatePipe} from '@angular/common';
import {BodyStructure, Cat, ReproductiveCycleFaze, Sex} from './food-requirement-calculator/cat-calculation-parameters';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Injectable({
  providedIn: 'root'
})
export class PdfWriterService {

  private readonly DATE_PIPE: DatePipe = new DatePipe('en-US');
  private readonly NO_DATA_LABEL = 'brak danych';

  @Input() pdf: any;

  constructor() {
    (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
  }

  write = (report: FoodRequirementReport) => {
    const date = this.DATE_PIPE.transform(new Date(), 'dd-MM-YYYY');
    const pdf: any = {
      layout: 'lightHorizontalLines',
      content: [
        {
          style: 'logo',
          fit: [90, 90],
          image: 'data:image/png;base64,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'
        },
        {
          style: 'gustawUrl',
          text: 'orczykowski',
          linkToDestination: 'https://github.com/orczykowski'
        },
        {text: 'Zapotrzebowanie kaloryczne', style: 'header'},
        {
          text: [
            {text: 'raport wygenrowany: ', style: 'italic'},
            {text: date, style: 'bold'}],
          margin: [0, 10, 0, 10]
        },
        {text: 'Informacje o kocie', style: 'midHeader'},
        this.addCatInfo(report.cat),
        {text: 'Raport', style: 'midHeader'},
        this.foodRequirementInfo(report),
        this.referenceFoodInfo(report),

      ],
      styles: this.createStyleForReport(),

    };

    pdfMake.createPdf(pdf).download(this.fileName(report.cat, date));
  }

  private foodRequirementInfo(report: FoodRequirementReport): any {
    return this.asTable([
      ['Spoczynkowe zapotrzebowanie na energię (RER)', this.asInt(report.rer) + 'kcl'],
      ['Dzienne zapotrzebowanie na energię metaboliczną', this.asInt(report.der) + 'kcl']
    ]);
  }

  private referenceFoodInfo(report: FoodRequirementReport): any {
    const waterRequirement = report.waterRequirement;
    return this.asTable([
      ['Łączna ilość płynów, którą powinin wypić kot w ciągu doby', this.asInt(waterRequirement.amount) + waterRequirement.unit],
      ['Ilość suchej karmy aby spełnić zapotrzebowanie całkowite der', this.asInt(report.weightOfCurrentDryFood) + report.foodUnit],
      ['Ilość mokrej kary aby spełnić zapotrzebowanie całkowiete der', this.asInt(report.weightOfCurrentWetFood) + report.foodUnit],
    ]);

  }

  private addCatInfo(cat: Cat): any {
    const rows = [
      ['imię', this.orNoData(cat.name())],
      ['wiek', `${this.asInt(cat.age)}`],
      ['waga', `${this.asInt(cat.weight)}`],
      ['płeć', this.mapSex(cat.sex)],
      ['budowa ciała', this.mapBodyStructure(cat.bodyStructure)],
      ['czy kot jest wysterylizowany?', this.mapBoolean(cat.isNotSterilized())]
    ];
    this.enrichByReproductiveInfoIfPresent(cat, rows);
    this.enrichByConvalescenceInfoIfPresent(cat, rows);
    return this.asTable(rows);
  }

  private enrichByConvalescenceInfoIfPresent = (cat: Cat, rows: string[][]) => {
    if (cat.isInConvalescence()) {
      rows.push(
        ['czy kot przechodzi rekonwalescencję', this.mapBoolean(cat.isInConvalescence())],
        ['postęp rekonwalescencji', this.asInt(cat.getConvalescenceProgress()) + '%']);
    }
  }

  private enrichByReproductiveInfoIfPresent = (cat: Cat, rows: string[][]) => {
    if (cat.isInReproductiveCycle()) {
      const faze = this.mapReproductiveFaze(cat.reproductiveFaze);
      rows.push(
        ['faza cyklu rozrodczego', faze],
        ['wybrany sposób kalkulacji', 'XXXX']);
    }
  }

  // tslint:disable-next-line:variable-name
  private orNoData(any: any | null): string {
    return any !== null ? any : this.NO_DATA_LABEL;
  }

  private mapSex = (sex: Sex | null) => {
    if (sex === null) {
      return this.NO_DATA_LABEL;
    }
    return sex === Sex.MALE ? 'Kot' : 'Kotka';
  }

  private mapBodyStructure(bodyStructure: BodyStructure | null): string {
    if (bodyStructure == null) {
      return this.NO_DATA_LABEL;
    }

    switch (bodyStructure) {
      case BodyStructure.VERY_FAT:
        return 'bardzo otyły';
      case BodyStructure.FAT:
        return 'otyły';
      case BodyStructure.NORMAL:
        return 'normalny';
      case BodyStructure.SLIM:
        return 'chudy';
    }
  }

  private mapBoolean(b: boolean | null): string {
    if (b === null) {
      return this.NO_DATA_LABEL;
    }
    return b ? 'tak' : 'nie';
  }

  private mapReproductiveFaze(faze: ReproductiveCycleFaze | null): string {
    if (faze === null) {
      return this.NO_DATA_LABEL;
    }
    switch (faze) {
      case ReproductiveCycleFaze.FEEDING:
        return 'Karmienie';
      case ReproductiveCycleFaze.HEAT:
        return 'Ruja';
      case ReproductiveCycleFaze.PREGNANCY:
        return 'Ciąża';
      case ReproductiveCycleFaze.NO:
        return 'Nie dotyczy';

    }
  }

  private asTable(param: Array<Array<string>>): any {
    return {
      style: 'tableStyle',
      table: {
        body: param,
        widths: ['*', 'auto'],
      },
      layout: {
        vLineWidth: (i: number, obj: any): number => {
          return 0;
        },
        hLineWidth: (i: number, obj: any): number => {
          return 1;
        },
        hLineColor: (i: number, obj: any): string => {
          return '#cccccc';
        },
        paddingLeft: (i: number, obj: any): number => {
          return 7;
        },
        paddingRight: (i: number, obj: any): number => {
          return 5;
        },
        paddingTop: (i: number, obj: any): number => {
          return 5;
        },
        paddingBottom: (i: number, obj: any): number => {
          return 7;
        },
        fillColor: (i: number, obj: any): string => {
          return '#f6f6f6';
        },
      }
    };
  }

  private asInt(num: number | null): string {
    if (num === null) {
      return this.NO_DATA_LABEL;
    }
    return num.toString();
  }

  private createStyleForReport = () => {
    return {
      gustawUrl: {
        fontSize: 12,
        color: '#888888',
        alignment: 'center',
        italics: true,
      },
      header: {
        fontSize: 18,
        color: '#222222',
        alignment: 'center',
        bold: true,
        margin: [0, 15, 0, 15]
      },
      logo: {
        alignment: 'center',
      },
      italic: {
        italics: true,
        color: '#666666'
      },
      bold: {
        bold: true
      },
      midHeader: {
        color: '#666666',
        bold: true,
        fontSize: 14,
        margin: [0, 10, 0, 10]
      },
      tableStyle: {
        margin: [0, 10, 0, 25],
        width: 100
      }
    };
  }

  private fileName = (cat: Cat, date: string | null) => {
    return `zapotrzebowanie_kaloryczne_dla_${cat.name()}_na_dzień_${date}.pdf`;
  }
}
