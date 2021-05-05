import {Injectable} from '@angular/core';
import {CatCalculationParameters} from "./food-requirement-calculator/cat-calculation-parameters";

export class CurrentFoodRequirementCalculationResult {
  private readonly _wetCalority: number;
  private readonly _amountOfWetFood: number;
  private readonly _dryCalority: number;
  private readonly _amountOfDryFood: number;
  private readonly _unit: string = "g";

  constructor(wetCalority: number, amountOfWetFood: number, dryCalority: number, amountOfDryFood: number) {
    this._wetCalority = wetCalority;
    this._amountOfWetFood = amountOfWetFood;
    this._dryCalority = dryCalority;
    this._amountOfDryFood = amountOfDryFood;
  }

  get wetCalority(): number {
    return this._wetCalority;
  }

  get amountOfWetFood(): number {
    return this._amountOfWetFood;
  }

  get dryCalority(): number {
    return this._dryCalority;
  }

  get amountOfDryFood(): number {
    return this._amountOfDryFood;
  }

  get unit(): string {
    return this._unit;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CurrentFoodRequirementCalculatorService {
  constructor() {
  }

  calculate(params: CatCalculationParameters, calorityRequirement: number): CurrentFoodRequirementCalculationResult {

    let dryFoodAmount = this.calculateFor(params.dryKcl, calorityRequirement);
    let wetFoodAmount = this.calculateFor(params.wetKcl, calorityRequirement);

    return new CurrentFoodRequirementCalculationResult(
      params.wetKcl, wetFoodAmount,
      params.dryKcl, dryFoodAmount
    );
  }

  private calculateFor(foodCalority: number, calorityRequirement: number): number {
    return (calorityRequirement * 100) / foodCalority;
  }
}
