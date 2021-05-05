import {Injectable} from '@angular/core';
import {CalorityCalculationResult} from "./calority-calculation-result";
import {KFactorCalculatorService} from "./k-factor-calculator.service";
import {Cat, CatCalculationParameters} from "./cat-calculation-parameters";


@Injectable({
  providedIn: 'root'
})
export class CalorityCalculatorService {

  constructor(private kFactorStrategy: KFactorCalculatorService) {
  }

  calculate(params: CatCalculationParameters): CalorityCalculationResult {
    const cat = params.cat;
    if (params.isCalculationByLactationCycle()) {
      return this.calculationByLactationWeek(cat);
    }
    return this.calculateUsingKFactor(cat);
  }

  private calculateUsingKFactor(cat: Cat): CalorityCalculationResult {
    const kFactor = this.kFactorStrategy.determineFor(cat);
    const der = kFactor.value * cat.rer()
    return new CalorityCalculationResult(der, "kFactor");
  }

  private calculationByLactationWeek(cat: Cat): CalorityCalculationResult {
    const rer = cat.rer();
    const rarPercentageCalculateForCatNumbers = this.getRerPercentage(cat.feedingWeek) * rer;
    const der = rer + (cat.numberOfKittens * rarPercentageCalculateForCatNumbers);

    return new CalorityCalculationResult(der, "lactationWeek");
  }

  private getRerPercentage(feedingWeek: number): number {
    switch (feedingWeek) {
      case 1:
      case 2:
        return 0.3
      case 3:
        return 0.45
      case 4:
        return 0.55
      case 5:
        return 0.65
      default:
        return 0.9
    }
  }
}
