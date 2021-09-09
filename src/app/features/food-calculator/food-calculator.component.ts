import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {CalorityCalculatorService} from "./food-requirement-calculator/calority-calculator.service";
import {
  Cat,
  CatCalculationParameters,
  ConvalescenceInfo,
  PostPregnantFeedingStrategy,
  ReproductionCycleInfo,
  ReproductiveCycleFaze,
  Sex,
} from "./food-requirement-calculator/cat-calculation-parameters";
import {FoodRequirementReport} from "./food-requirement-report";
import {CurrentFoodRequirementCalculatorService} from "./current-food-requirement-calculator.service";
import {PdfWriterService} from "./pdf-writer.service";
import {WaterRequirementCalculatorService} from "./water-requirement-calculator.service";

@Component({
  selector: 'app-food-calorityCalculator',
  templateUrl: './food-calculator.component.html',
  styleUrls: ['./food-calculator.component.css']
})
export class FoodCalculatorComponent implements OnInit {
  report: FoodRequirementReport | null = null;

  calculationForm = this.formBuilder.group({
    name: null,
    age: null,
    weight: null,
    sex: null,
    bodyStructure: null,
    isSterilized: null,
    numberOfKittens: null,
    feedingWeek: null,
    isInConvalescenceProcess: false,
    convalescenceProgress: null,
    dryKcl: null,
    wetKcl: null,
    reproductiveFaze: null,
    postPregnantStrategy: null
  });

  constructor(private formBuilder: FormBuilder,
              private calorityCalculator: CalorityCalculatorService,
              private currentFoodRequirementCalculator: CurrentFoodRequirementCalculatorService,
              private waterRequirementCalculator: WaterRequirementCalculatorService,
              private pdfWriter: PdfWriterService) {
  }

  ngOnInit(): void {
    this.reset();
  }

  onSubmit(): void {
    this.calculate();
  }

  reset() {
    this.report = null;
    this.calculationForm.reset();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (true) {
      case event.key == 'Escape': {
        this.reset();
        break;
      }
      case this.report == null && event.key == 'Enter': {
        this.calculate();
        break;
      }
      case this.report != null && event.key == 'Enter': {
        this.generatePdf();
        break;
      }
    }
  }

  generatePdf() {
    if (this.report !== null) {
      this.pdfWriter.write(this.report);
    }
  }

  isCalculateByNumberOfKittens(): boolean {
    return this.calculationForm.controls['postPregnantStrategy']?.value === PostPregnantFeedingStrategy.NUMBER_OF_KITTENS;
  }

  isCalculateByFeedingWeek(): boolean {
    return this.calculationForm.controls['postPregnantStrategy']?.value === PostPregnantFeedingStrategy.FEEDING_WEEK;
  }

  shouldShowReproductiveCyclePart(): boolean {
    let isFemale: boolean = this.calculationForm.controls['sex']?.value === Sex.FEMALE;
    let isNotSterilized: boolean = this.calculationForm.controls['isSterilized']?.value === 'false';
    return isNotSterilized && isFemale;
  }

  shouldShowConvalescencePart(): boolean {
    return this.calculationForm.controls['isInConvalescenceProcess']?.value === 'true';
  }

  shouldShowFeedingPart() {
    return this.calculationForm.controls['reproductiveFaze']?.value !== ReproductiveCycleFaze.NO;
  }

  reportIsPresent(): boolean {
    return this.report !== null;
  }

  private createCalculationParams(): CatCalculationParameters {
    return new CatCalculationParameters(
      new Cat(
        this.calculationForm.controls["name"]?.value,
        this.convalescenceInfo(),
        this.calculationForm.controls["age"]?.value,
        this.calculationForm.controls["mature"]?.value,
        this.calculationForm.controls["sex"]?.value,
        this.calculationForm.controls["weight"]?.value,
        this.calculationForm.controls["bodyStructure"]?.value,
        this.calculationForm.controls["isSterilized"]?.value,
        this.reproductionCycleInfo()
      ),
      this.calculationForm.controls["dryKcl"]?.value,
      this.calculationForm.controls["wetKcl"]?.value,
      this.calculationForm.controls["postPregnantStrategy"]?.value
    );
  }

  private convalescenceInfo(): ConvalescenceInfo | null {
    const progress = this.calculationForm.controls["convalescenceProgress"]?.value;
    if (progress === null || progress === undefined) {
      return null;
    }
    return new ConvalescenceInfo(progress);
  }

  private calculate() {
    if (this.calculationForm.invalid) {
      console.log(this.calculationForm)
      return;
    }
    const params = this.createCalculationParams();
    const calorityRequirement = this.calorityCalculator.calculate(params);
    const currentFoodRequirement = this.currentFoodRequirementCalculator.calculate(params, calorityRequirement.der);
    const waterRequirement = this.waterRequirementCalculator.calculate(params.cat);

    this.report = new FoodRequirementReport(calorityRequirement, params, currentFoodRequirement, waterRequirement);
    console.log(this.report);
  }

  private reproductionCycleInfo(): ReproductionCycleInfo | null {
    const reproductiveFaze = this.calculationForm.controls["reproductiveFaze"]?.value;
    if (reproductiveFaze === null || reproductiveFaze === undefined) {
      return null;
    }
    return new ReproductionCycleInfo(
      reproductiveFaze,
      this.calculationForm.controls["numberOfKittens"]?.value,
      this.calculationForm.controls["feedingWeek"]?.value,
    );
  }
}
