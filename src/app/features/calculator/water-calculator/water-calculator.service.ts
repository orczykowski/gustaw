import {Injectable} from '@angular/core';

export type DietType = 'dry' | 'wet' | 'mixed';
export type ActivityLevel = 'low' | 'moderate' | 'high';
export type Environment = 'normal' | 'hot';
export type LifeStage = 'kitten' | 'adult' | 'senior';

export interface WaterInput {
  weightKg: number;
  diet: DietType | null;
  activity: ActivityLevel | null;
  environment: Environment | null;
  lifeStage: LifeStage | null;
  pregnantOrNursing: boolean;
}

export interface WaterResult {
  weightKg: number;
  baseMl: number;
  minMl: number;
  maxMl: number;
  adjustedMl: number;
  mlPerKg: number;
  dietNote: string | null;
  lifeStageNote: string | null;
  pregnancyNote: string | null;
  adjustmentsApplied: string[];
  status: 'low' | 'normal' | 'elevated';
  statusLabel: string;
  statusNote: string;
}

const ACTIVITY_MULTIPLIER: Record<ActivityLevel, number> = {
  low: 1.0,
  moderate: 1.05,
  high: 1.10,
};

const DIET_NOTE: Record<DietType, string> = {
  dry: 'Sucha karma zawiera około 8–10% wilgoci. Kot spożywający wyłącznie suchą karmę powinien pobierać prawie całe dzienne zapotrzebowanie na wodę z picia.',
  wet: 'Mokra karma zawiera około 70–80% wilgoci. Znaczna część dziennego nawodnienia pochodzi z jedzenia, więc mniejsza ilość wypijana jest normalna.',
  mixed: 'Dieta mieszana dostarcza pośrednią ilość wilgoci z pokarmu. Całkowite nawodnienie to suma wody z picia i wilgoci z karmy.',
};

const LIFE_STAGE_NOTE: Record<LifeStage, string | null> = {
  kitten: 'Kocięta mają wyższe tempo metabolizmu i intensywnie rosną — odpowiednie nawodnienie jest szczególnie ważne.',
  adult: null,
  senior: 'Starsze koty są bardziej podatne na choroby nerek. Regularne monitorowanie spożycia wody jest zalecane.',
};

@Injectable({providedIn: 'root'})
export class WaterCalculatorService {

  calculate(input: WaterInput): WaterResult {
    const {weightKg, diet, activity, environment, lifeStage, pregnantOrNursing} = input;

    const baseMl = Math.round(weightKg * 50);
    const minMl = Math.round(weightKg * 40);
    const maxMl = Math.round(weightKg * 60);

    const adjustmentsApplied: string[] = [];
    let multiplier = 1.0;

    if (activity && activity !== 'low') {
      multiplier *= ACTIVITY_MULTIPLIER[activity];
      adjustmentsApplied.push(activity === 'moderate' ? '+5% aktywność' : '+10% aktywność');
    }

    if (environment === 'hot') {
      multiplier *= 1.10;
      adjustmentsApplied.push('+10% upał');
    }

    if (pregnantOrNursing) {
      multiplier *= 1.30;
      adjustmentsApplied.push('+30% ciąża/karmienie');
    }

    const adjustedMl = Math.round(baseMl * multiplier);
    const mlPerKg = adjustedMl / weightKg;

    const {status, statusLabel, statusNote} = this.resolveStatus(mlPerKg, pregnantOrNursing, environment === 'hot');

    return {
      weightKg,
      baseMl,
      minMl,
      maxMl,
      adjustedMl,
      mlPerKg: Math.round(mlPerKg * 10) / 10,
      dietNote: diet ? DIET_NOTE[diet] : null,
      lifeStageNote: lifeStage ? (LIFE_STAGE_NOTE[lifeStage] ?? null) : null,
      pregnancyNote: pregnantOrNursing
        ? 'Kotki ciężarne i karmiące potrzebują znacznie więcej wody, aby sprostać zwiększonym potrzebom metabolicznym i produkcji mleka.'
        : null,
      adjustmentsApplied,
      status,
      statusLabel,
      statusNote,
    };
  }

  private resolveStatus(mlPerKg: number, pregnant: boolean, hot: boolean): {status: 'low' | 'normal' | 'elevated'; statusLabel: string; statusNote: string} {
    if (mlPerKg < 40) {
      return {
        status: 'low',
        statusLabel: 'Poniżej normy',
        statusNote: 'Możliwe niewystarczające spożycie wody. Obserwuj nawodnienie kota i skonsultuj się z weterynarzem, jeśli pojawią się oznaki odwodnienia.',
      };
    }
    if (mlPerKg > 60) {
      return {
        status: 'elevated',
        statusLabel: pregnant || hot ? 'Podwyższone (oczekiwane)' : 'Powyżej typowej normy',
        statusNote: pregnant || hot
          ? 'Zwiększone zapotrzebowanie jest uzasadnione stanem fizjologicznym lub warunkami środowiskowymi.'
          : 'Utrzymujące się nadmierne pragnienie (polidypsja) wymaga oceny weterynaryjnej — może wskazywać na chorobę nerek, cukrzycę lub nadczynność tarczycy.',
      };
    }
    return {
      status: 'normal',
      statusLabel: 'W normie',
      statusNote: 'Typowe zdrowe spożycie wody dla większości kotów.',
    };
  }
}
