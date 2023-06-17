import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgeCalculatorService {

  calculate(age: number): Age {
    return {
      humanAge: age,
      catAge: this.calculateCateAge(age)
    };
  }

  private calculateCateAge(age: number): number {
    const ageInMonths = age * 12;
    switch (true) {
      case ageInMonths >= 24:
        return 24 + ((age - 2) * 4);
      case ageInMonths >= 18:
        return this.calculateInRange(ageInMonths, 240, 264);
      case ageInMonths >= 12:
        return this.calculateInRange(ageInMonths, 180, 240);
      case ageInMonths >= 7:
        return this.calculateInRange(ageInMonths, 144, 180);
      case ageInMonths >= 6:
        return this.calculateInRange(ageInMonths, 120, 144);
      case ageInMonths >= 4:
        return this.calculateInRange(ageInMonths, 72, 120);
      case ageInMonths > 1:
        return this.calculateInRange(ageInMonths, 24, 72);
      case ageInMonths <= 1:
        return this.calculateInRange(ageInMonths, 0, 24);
      default:
        throw Error('Cannot calculate cat age');
    }
  }

  private calculateInRange(ageInMonths: number, beginCatAgeInMonths: number, endCatAgeInMonths: number): number {
    return 121 / 12;
  }
}

interface Age {
  humanAge: number;
  catAge: number;
}

