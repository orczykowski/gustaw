import {Cat, CatCalculationParameters} from "./food-requirement-calculator/cat-calculation-parameters";
import {CalorityCalculationResult} from "./food-requirement-calculator/calority-calculation-result";
import {CurrentFoodRequirementCalculationResult} from "./current-food-requirement-calculator.service";
import {WaterRequirementResult} from "./water-requirement-calculator.service";

export class FoodRequirementReport {
  private readonly _calorityCalculationResult: CalorityCalculationResult;
  private readonly _calculationParams: CatCalculationParameters;
  private readonly _currentFoodRequirement: CurrentFoodRequirementCalculationResult;
  private readonly _waterRequirement: WaterRequirementResult


  constructor(footRequirementCalculationResult: CalorityCalculationResult,
              calculationParams: CatCalculationParameters,
              currentFoodRequirement: CurrentFoodRequirementCalculationResult,
              waterRequirement: WaterRequirementResult) {
    this._calorityCalculationResult = footRequirementCalculationResult;
    this._calculationParams = calculationParams;
    this._currentFoodRequirement = currentFoodRequirement;
    this._waterRequirement = waterRequirement;
  }

  get footRequirementCalculationResult(): CalorityCalculationResult {
    return this._calorityCalculationResult;
  }

  get der(): number {
    return this.nonNullAsInt(this._calorityCalculationResult.der);
  }

  get rer(): number {
    return this.nonNullAsInt(this._calculationParams.cat.rer());
  }

  get catName(): string {
    return this._calculationParams.cat.name();
  }

  get weightOfCurrentDryFood(): number | null {
    return this.asInt(this._currentFoodRequirement.amountOfDryFood);
  }

  get weightOfCurrentWetFood(): number | null {
    return this.asInt(this._currentFoodRequirement.amountOfWetFood);
  }

  get foodUnit(): string {
    return this._currentFoodRequirement.unit;
  }

  get cat(): Cat {
    return this._calculationParams.cat;
  }

  get waterRequirement(): WaterRequirementResult {
    return this._waterRequirement;
  }

  private nonNullAsInt(num: Number): number {
    return parseInt(num.toString(), 10);
  }

  private asInt(num: Number | null): number | null {
    if (num === null) {
      return null;
    }
    return parseInt(num.toString(), 10);
  }
}
