import {Component, HostListener, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {CalorityCalculatorService} from './food-requirement-calculator/calority-calculator.service';
import {
  Cat,
  CatCalculationParameters,
  ConvalescenceInfo,
  PostPregnantFeedingStrategy,
  ReproductionCycleInfo,
  ReproductiveCycleFaze,
  Sex,
} from './food-requirement-calculator/cat-calculation-parameters';
import {FoodRequirementReport} from './food-requirement-report';
import {CurrentFoodRequirementCalculatorService} from './current-food-requirement-calculator.service';
import {PdfWriterService} from './pdf-writer.service';
import {WaterRequirementCalculatorService} from './water-requirement-calculator.service';
import {CustomValidators} from './custom.validators';

@Component({
  selector: 'food-caloric-calculator',
  templateUrl: './food-calculator.component.html',
  styleUrls: ['./food-calculator.component.css']
})
export class FoodCalculatorComponent implements OnInit {

  report: FoodRequirementReport | null = null;
  calculationForm: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl(
      null,
      [Validators.required, Validators.minLength(2), Validators.maxLength(25)]
    ),
    age: new UntypedFormControl(
      null,
      [Validators.required, Validators.min(0.1), Validators.max(40)]
    ),
    weight: new UntypedFormControl(
      null,
      [Validators.required, Validators.min(0.1), Validators.max(40)]
    ),
    sex: new UntypedFormControl(
      null,
      [Validators.required]
    ),
    bodyStructure: new UntypedFormControl(
      null,
      [Validators.required]
    ),
    isSterilized: new UntypedFormControl(
      null,
      [Validators.required]
    ),
    numberOfKittens: new UntypedFormControl(
      null,
      []),
    feedingWeek: new UntypedFormControl(
      null,
      []
    ),
    reproductiveFaze: new UntypedFormControl(
      null,
      [CustomValidators.reproductiveCycleFazeValidator()]
    ),
    postPregnantStrategy: new UntypedFormControl(
      null,
      [CustomValidators.postPregnantStrategyValidator()]
    ),
    isInConvalescenceProcess: new UntypedFormControl(
      false,
      [Validators.required]),
    convalescenceProgress: new UntypedFormControl(
      null,
      []
    ),
    dryKcl: new UntypedFormControl(
      null,
      [Validators.min(1), Validators.max(9999)]
    ),
    wetKcl: new UntypedFormControl(
      null,
      [Validators.min(1), Validators.max(9999)]
    )
  });

  constructor(private calorityCalculator: CalorityCalculatorService,
              private currentFoodRequirementCalculator: CurrentFoodRequirementCalculatorService,
              private waterRequirementCalculator: WaterRequirementCalculatorService,
              private pdfWriter: PdfWriterService) {
  }

  ngOnInit(): void {
    this.reset();
  }

  onSubmit(): void {
    if (this.calculationForm.status === 'INVALID') {
      this.calculationForm.markAllAsTouched();
      return;
    }
    this.calculate();
  }

  reset() {
    this.report = null;
    this.calculationForm.reset();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (true) {
      case event.key === 'Escape': {
        this.reset();
        break;
      }
      case this.report == null && event.key === 'Enter': {
        this.onSubmit();
        break;
      }
      case this.report != null && event.key === 'Enter': {
        this.generatePdf();
        break;
      }
    }
  }

  generatePdf = () => {
    if (this.report !== null) {
      this.pdfWriter.write(this.report);
    }
  };

  isCalculateByNumberOfKittens(): boolean {
    return this.calculationForm.controls['postPregnantStrategy']?.value === PostPregnantFeedingStrategy.NUMBER_OF_KITTENS;
  }

  isCalculateByFeedingWeek(): boolean {
    return this.calculationForm.controls['postPregnantStrategy']?.value === PostPregnantFeedingStrategy.FEEDING_WEEK;
  }

  shouldShowReproductiveCyclePart(): boolean {
    const isFemale: boolean = this.calculationForm.controls['sex']?.value === Sex.FEMALE;
    const isNotSterilized: boolean = this.calculationForm.controls['isSterilized']?.value === 'false';
    return isNotSterilized && isFemale;
  }

  shouldShowConvalescencePart(): boolean {
    return this.calculationForm.controls['isInConvalescenceProcess']?.value === 'true';
  }

  shouldShowFeedingPart(): boolean {
    return this.calculationForm.controls['reproductiveFaze']?.value !== null
      && this.calculationForm.controls['reproductiveFaze']?.value !== undefined
      && this.calculationForm.controls['reproductiveFaze']?.value !== ReproductiveCycleFaze.NO;
  }

  reportIsPresent(): boolean {
    return this.report !== null;
  }

  private createCalculationParams(): CatCalculationParameters {
    return new CatCalculationParameters(
      new Cat(
        this.calculationForm.controls['name']?.value,
        this.convalescenceInfo(),
        this.calculationForm.controls['age']?.value,
        this.calculationForm.controls['mature']?.value,
        this.calculationForm.controls['sex']?.value,
        this.calculationForm.controls['weight']?.value,
        this.calculationForm.controls['bodyStructure']?.value,
        this.calculationForm.controls['isSterilized']?.value,
        this.reproductionCycleInfo()
      ),
      this.calculationForm.controls['dryKcl']?.value,
      this.calculationForm.controls['wetKcl']?.value,
      this.calculationForm.controls['postPregnantStrategy']?.value
    );
  }

  private convalescenceInfo(): ConvalescenceInfo | null {
    const progress = this.calculationForm.controls['convalescenceProgress']?.value;
    if (progress === null || progress === undefined) {
      return null;
    }
    return new ConvalescenceInfo(progress);
  }

  private calculate() {
    const params = this.createCalculationParams();
    const calorityRequirement = this.calorityCalculator.calculate(params);
    const currentFoodRequirement = this.currentFoodRequirementCalculator.calculate(params, calorityRequirement.der);
    const waterRequirement = this.waterRequirementCalculator.calculate(params.cat);

    this.report = new FoodRequirementReport(calorityRequirement, params, currentFoodRequirement, waterRequirement);
  }

  private reproductionCycleInfo(): ReproductionCycleInfo | null {
    const reproductiveFaze = this.calculationForm.controls['reproductiveFaze']?.value;
    if (reproductiveFaze === null || reproductiveFaze === undefined) {
      return null;
    }
    return new ReproductionCycleInfo(
      reproductiveFaze,
      this.calculationForm.controls['numberOfKittens']?.value,
      this.calculationForm.controls['feedingWeek']?.value,
    );
  }
}
