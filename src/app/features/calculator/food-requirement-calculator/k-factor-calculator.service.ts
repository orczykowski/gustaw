import {Injectable} from '@angular/core';
import {BodyStructure, Cat, KFactor} from './cat-calculation-parameters';

@Injectable({
  providedIn: 'root'
})
export class KFactorCalculatorService {
  private baseKFactorDefinition = {
    ADULT: 1.4,
    ADULT_STERILIZED: 1.2,
    KITTEN: 2.5,
    HEAT: 1.6,
    PREGNANT: 2.0,
    BEGIN_CONVALESCENCE: 1.403,
    END_CONVALESCENCE: 1.201
  };

  determineFor(cat: Cat): KFactor {
    switch (true) {
      case cat.isInReproductiveCycle():
        return this.calculateForReproductiveCycle(cat);
      case cat.isInConvalescence():
        return this.calculateKFactorForteConvalescence(cat.getConvalescenceProgress());
      default:
        return this.calculateKFactorRegularCat(cat);
    }
  }

  private calculateForReproductiveCycle(cat: Cat): KFactor {
    switch (true) {
      case cat.isFeeding():
        return this.calculateKFactorForFeeding(cat);
      case cat.isInPregnant():
        return new KFactor(this.baseKFactorDefinition.PREGNANT, 'reproductive, pregnant');
      case cat.isInHeat():
        return new KFactor(this.baseKFactorDefinition.HEAT, 'reproductive, heat');
      default:
        throw new Error('it never ever should be here');
    }
  }

  private calculateKFactorForFeeding(cat: Cat): KFactor {
    switch (cat.numberOfKittens) {
      case 1:
        return new KFactor(2.0, 'Cykl rozrodczy dla 1 kotka');
      case 2:
        return new KFactor(2.75, 'Cykl rozrodczy dla 2 mlodych');
      case 3:
        return new KFactor(3.0, 'Cykl rozrodczy dla 3 mlodych');
      case 4:
        return new KFactor(4.0, 'Cykl rozrodczy dla 4 mlodych');
      default:
        return new KFactor(5.0, 'Cykl rozrodczy dla 5 i więcej mlodych');
    }
  }

  private calculateKFactorForteConvalescence(progress: number): KFactor {
    const delta = this.baseKFactorDefinition.BEGIN_CONVALESCENCE - this.baseKFactorDefinition.END_CONVALESCENCE;
    const percentOfDelta = delta * progress;
    const kFactorValue = this.baseKFactorDefinition.BEGIN_CONVALESCENCE - percentOfDelta;
    return new KFactor(kFactorValue, 'Proces rekonwalescencji');
  }

  private calculateKFactorRegularCat(cat: Cat): KFactor {
    switch (true) {
      case cat.isKitten():
        return new KFactor(2.5, 'Kot w fazie rozwoju');
      case cat.isOld():
        return this.calculateForOldCat(cat);
      default:
        return this.calculateForAdultCat(cat);
    }
  }

  private calculateForAdultCat(cat: Cat): KFactor {
    switch (true) {
      case this.shouldCalculateByBodyStructure(cat.bodyStructure):
        return this.calculateByBodyStructure(cat.bodyStructure);
      case cat.isSterilized(): {
        return new KFactor(this.baseKFactorDefinition.ADULT_STERILIZED, 'Dorosly wsyterylizowny');
      }
      case cat.isNotSterilized(): {
        return new KFactor(this.baseKFactorDefinition.ADULT, 'Dorosly niewysterlizowany');
      }
      default:
        throw new Error('cant calculate K-Factor for adult cat');
    }
  }

  private shouldCalculateByBodyStructure(bodyStructure: BodyStructure): boolean {
    return BodyStructure.NORMAL !== bodyStructure;
  }

  private calculateByBodyStructure(bodyStructure: BodyStructure): KFactor {
    switch (bodyStructure) {
      case BodyStructure.VERY_FAT:
        return new KFactor(0.8, 'Budowa ciała, za grubuy kot');
      case BodyStructure.FAT:
        return new KFactor(1.0, 'Budowa ciała, gruby Kot');
      case BodyStructure.SLIM:
        return new KFactor(1.2, 'Budowa ciała, chudy kot');
      default:
        return new KFactor(1.1, 'Budowa ciała, normalny kot');
    }
  }

  private calculateForOldCat(cat: Cat): KFactor {
    const age = cat.age;
    if (age >= 10 && age <= 11.5) {
      return new KFactor(1.4, 'Kot starszy');
    }
    if (age > 11.5 && age <= 13) {
      return new KFactor(1.5, 'Kot starszy');
    }
    return new KFactor(1.6, 'Kot starszy');
  }
}
