import {CatAge} from '../age-calculator.service';

export const enum Sex {
  MALE, FEMALE
}

export const enum BodyStructure {
  SLIM, NORMAL, FAT, VERY_FAT
}

export const enum PostPregnantFeedingStrategy {
  FEEDING_WEEK, NUMBER_OF_KITTENS
}

export const enum Mature {
  ADULT, CHILDREN
}

export const enum ReproductiveCycleFaze {
  NO, PREGNANCY, HEAT, FEEDING
}

export class KFactor {
  constructor(private readonly kValue: number, private readonly kName: string) {
  }

  get value(): number {
    return this.kValue;
  }

  get name(): string {
    return this.kName;
  }
}


export class CatCalculationParameters {
  constructor(private _cat: Cat,
              private _dryKcl: number,
              private _wetKcl: number,
              private _reproductiveCycleCalculationType: PostPregnantFeedingStrategy) {
  }

  isCalculationByLactationCycle(): boolean {
    return this._cat.isInReproductiveCycle() && this._reproductiveCycleCalculationType === PostPregnantFeedingStrategy.FEEDING_WEEK;
  }

  get cat(): Cat {
    return this._cat;
  }

  get dryKcl(): number {
    if (this._dryKcl == null) {
      return 0;
    }
    return this._dryKcl;
  }

  get wetKcl(): number {
    if (this._wetKcl == null) {
      return 0;
    }
    return this._wetKcl;
  }
}

export class ConvalescenceInfo {
  constructor(private _progress: number) {
  }

  get isInProcess() {
    return this._progress > 0;
  }

  get progress() {
    return this._progress;
  }
}

export class ReproductionCycleInfo {

  constructor(
    private readonly _cycleFaze: ReproductiveCycleFaze | null,
    private readonly _numberOfKittens: number,
    private readonly _feedingWeek: number) {

  }

  get cycleFaze(): ReproductiveCycleFaze | null {
    return this._cycleFaze;
  }

  get numberOfKittens(): number {
    return this._numberOfKittens;
  }

  get feedingWeek(): number {
    return this._feedingWeek;
  }

  isReproductive(): boolean {
    return this.cycleFaze != null && this.cycleFaze !== ReproductiveCycleFaze.NO;
  }
}

export class Cat {
  private readonly _name: string;
  private readonly _convalescenceInfo: ConvalescenceInfo | null;
  private readonly _age: CatAge;
  private readonly _mature: Mature;
  private readonly _sex: Sex;
  private readonly _weight: number;
  private readonly _bodyStructure: BodyStructure;
  private readonly _sterilized: boolean;
  private readonly _reproductiveCycleInfo: ReproductionCycleInfo | null;


  constructor(name: string,
              convalescenceInfo: ConvalescenceInfo | null,
              age: CatAge,
              mature: Mature,
              sex: Sex,
              weight: number,
              bodyStructure: BodyStructure,
              sterilized: boolean,
              reproductiveCycleInfo: ReproductionCycleInfo | null) {
    this._convalescenceInfo = convalescenceInfo;
    this._age = age;
    this._mature = mature;
    this._sex = sex;
    this._weight = weight;
    this._bodyStructure = bodyStructure;
    this._sterilized = sterilized;
    this._reproductiveCycleInfo = reproductiveCycleInfo;
    this._name = name;
  }

  get age(): CatAge {
    return this._age;
  }

  get feedingWeek(): number {
    if (!this.isPresent(this._reproductiveCycleInfo)) {
      throw new Error('Illegal operation');
    }
    return this._reproductiveCycleInfo!.feedingWeek;
  }

  get numberOfKittens(): number {
    if (!this.isPresent(this._reproductiveCycleInfo)) {
      throw new Error('Illegal operation');
    }
    return this._reproductiveCycleInfo!.numberOfKittens;
  }

  get weight(): number {
    if (this._weight == null) {
      return 0;
    }
    return this._weight;
  }

  get bodyStructure(): BodyStructure {
    return this._bodyStructure;
  }

  isSterilized(): boolean {
    return this._sterilized;
  }

  isNotSterilized(): boolean {
    return this._sterilized;
  }

  isInPregnant(): boolean {
    return this.isInReproductiveCycle() && this._reproductiveCycleInfo!.cycleFaze === ReproductiveCycleFaze.PREGNANCY;
  }

  isInHeat(): boolean {
    return this.isInReproductiveCycle() && this._reproductiveCycleInfo!.cycleFaze === ReproductiveCycleFaze.HEAT;
  }

  isFeeding(): boolean {
    return this.isInReproductiveCycle() && this._reproductiveCycleInfo!.cycleFaze === ReproductiveCycleFaze.FEEDING;
  }

  isInReproductiveCycle(): boolean {
    return this.isPresent(this._reproductiveCycleInfo) && this.isReproductiveCyclePossible() && this._reproductiveCycleInfo!.isReproductive();
  }

  rer(): number {
    return 70 * Math.pow(this._weight, 0.67);
  }

  isInConvalescence(): boolean {
    return this.isPresent(this._convalescenceInfo) && this._convalescenceInfo!.isInProcess;
  }

  getConvalescenceProgress(): number {
    if (!this.isPresent(this._convalescenceInfo)) {
      throw new Error('Illegal operation');
    }
    return this._convalescenceInfo!.progress / 100;
  }

  isAdult(): boolean {
    return this._mature === Mature.ADULT || this._age.humanAge >= 4;
  }

  isKitten(): boolean {
    return !this.isAdult();
  }

  isOld(): boolean {
    return this._age.humanAge >= 10;
  }

  name(): string {
    return this._name;
  }

  get sex(): Sex {
    return this._sex;
  }

  get reproductiveFaze(): ReproductiveCycleFaze | null {
    if (this._reproductiveCycleInfo === null) {
      return null;
    }
    return this._reproductiveCycleInfo.cycleFaze;
  }

  private isReproductiveCyclePossible(): boolean {
    return this._sex === Sex.FEMALE && !this._sterilized && this.isAdult();
  }

  private isPresent(obj: any): boolean {
    return obj !== null && obj !== undefined;
  }
}

