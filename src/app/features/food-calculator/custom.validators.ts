import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";
import {ReproductiveCycleFaze, Sex} from "./food-requirement-calculator/cat-calculation-parameters";

export class CustomValidators {
  static reproductiveCycleFazeValidator(): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
      if (CustomValidators.isReproductiveCyclePossible(form)) {
        const faze = form.get('reproductiveFaze')?.value;
        if (faze === null || faze === undefined) {
          return {reproductiveFaze: true}
        }
      }
      return null;
    }
  }

  static postPregnantStrategyValidator(): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
      const isInReproductiveCycle = form.get('reproductiveFaze')?.value !== null
        && form.get('reproductiveFaze')?.value !== undefined
        && form.get('reproductiveFaze')?.value !== ReproductiveCycleFaze.NO;
      if (CustomValidators.isReproductiveCyclePossible(form) && isInReproductiveCycle) {
        const strategy = form.get('postPregnantStrategy')?.value;
        if(strategy === null || strategy === undefined){
          return {postPregnantStrategy: true};
        }
      }
      return null;
    }
  }

  private static isReproductiveCyclePossible(form: AbstractControl): boolean {
    const isFemale: boolean = form.get('sex')?.value === Sex.FEMALE;
    const isNotSterilized: boolean = form.get('isSterilized')?.value === 'false';
    return isFemale && isNotSterilized;
  }
}
