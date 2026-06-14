import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgeCalculatorService {

  calculate(age: number, unit: AGE_UNIT = AGE_UNIT.YEAR): CatAge {
    return {
      humanAge: age,
      catAge: this.calculateCateAge(age, unit)
    };
  }

  private calculateCateAge(age: number, unit: AGE_UNIT): number {
    const humanAgeInMonths = (unit === AGE_UNIT.YEAR) ? age * 12 : age;
    const roundedHumanAgeInMonths = Math.round(humanAgeInMonths);
    switch (true) {
      case roundedHumanAgeInMonths >= 24:
        return this.calculateCatAge(roundedHumanAgeInMonths, (x: number) => 288 + ((x - 24) * 4));
      case roundedHumanAgeInMonths >= 18:
        return this.calculateCatAge(roundedHumanAgeInMonths, (x: number) => 8 * x + 96);
      case roundedHumanAgeInMonths >= 12:
        return this.calculateCatAge(roundedHumanAgeInMonths, (x: number) => 10 * x + 60);
      case roundedHumanAgeInMonths >= 7:
        return this.calculateCatAge(roundedHumanAgeInMonths, (x: number) => 7.2 * x + 93.6);
      case roundedHumanAgeInMonths >= 6:
        return this.calculateCatAge(roundedHumanAgeInMonths, (x: number) => 24 * x - 24);
      case roundedHumanAgeInMonths > 4:
        return this.calculateCatAge(roundedHumanAgeInMonths, (x: number) => 27 * x - 21);
      case roundedHumanAgeInMonths === 4:
        return this.calculateCatAge(roundedHumanAgeInMonths, (x: number) => 72);
      case roundedHumanAgeInMonths >= 2:
        return this.calculateCatAge(roundedHumanAgeInMonths, (x: number) => 36 * x - 48);
      case roundedHumanAgeInMonths > 1:
        return this.calculateCatAge(roundedHumanAgeInMonths, (x: number) => 22 * x - 16);
      default:
        return this.calculateCatAge(roundedHumanAgeInMonths, (x: number) => 6.024096385542168 * x);
    }
  }

  private calculateCatAge(ageInMonths: number, calculate: (arg: number) => number): number {
    return Number((calculate(ageInMonths) / 12).toPrecision(2));
  }
}

export interface CatAge {
  humanAge: number;
  catAge: number;
}

export enum AGE_UNIT {
  YEAR, MONTH
}

