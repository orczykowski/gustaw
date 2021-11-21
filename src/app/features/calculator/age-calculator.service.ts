import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgeCalculatorService {
  private static MONTH = 1 / 12;

  constructor() {
  }

  calculate(age: number): Age {
    if (age <= AgeCalculatorService.MONTH) {
      return {
        humanAge: age,
        catAge: age * 75
      };
    }

    if (age <= 3 * AgeCalculatorService.MONTH) {
      return {
        humanAge: age,
        catAge: 0.5
      };
    }

    if (age <= 4 * AgeCalculatorService.MONTH) {
      return {
        humanAge: age,
        catAge: 0.5
      };
    }

    if (age <= 6 * AgeCalculatorService.MONTH) {
      return {
        humanAge: age,
        catAge: 0.5
      };
    }

    if (age <= 7 * AgeCalculatorService.MONTH) {
      return {
        humanAge: age,
        catAge: 0.5
      };
    }

    if (age <= 1) {
      return {
        humanAge: age,
        catAge: 0.5
      };
    }

    if (age <= 1.5) {
      return {
        humanAge: age,
        catAge: 24
      };
    }

    if (age <= 2) {
      return {
        humanAge: age,
        catAge: 24
      };
    }
    return {
      humanAge: age,
      catAge: 24 + ((age - 2) * 4)
    };
  }
}

interface Age {
  humanAge: number;
  catAge: number;
}

