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
    return this._calorityCalculationResult.der;
  }

  get rer(): number {
    return this._calculationParams.cat.rer();
  }

  get catName(): string {
    return "some anme";//this._calculationParams.cat.name();
  }

  get weightOfCurrentUseDryFood(): number {
    return this._currentFoodRequirement.amountOfDryFood;
  }

  get weightOfCurrentUseWetFood(): number {
    return this._currentFoodRequirement.amountOfWetFood;
  }

  get cat(): Cat {
    return this._calculationParams.cat;
  }

  getWaterRequirement(): WaterRequirementResult {
    return this._waterRequirement;
  }
}
