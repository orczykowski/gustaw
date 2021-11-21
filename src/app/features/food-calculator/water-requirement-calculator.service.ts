import {Injectable} from '@angular/core';
import {Cat} from "./food-requirement-calculator/cat-calculation-parameters";

export class WaterRequirementResult {
  private readonly _amount: number;
  private readonly _unit: string = "ml";

  constructor(amount: number) {
    this._amount = amount;
  }

  get amount(): number {
    return this._amount;
  }

  get unit(): string {
    return this._unit;
  }
}

@Injectable({
  providedIn: 'root'
})
export class WaterRequirementCalculatorService {

  constructor() {
  }

  calculate(cat: Cat): WaterRequirementResult {
    if (cat.weight === 0) {
      return new WaterRequirementResult(0);
    }
    return new WaterRequirementResult(
      30 * cat.weight + 70
    );
  }
}
