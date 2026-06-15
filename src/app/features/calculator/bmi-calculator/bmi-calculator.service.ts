import {Injectable} from '@angular/core';

export interface BmiResult {
  weightKg: number;
  lengthCm: number;
  fBmi: number;
  category: BmiCategory;
  label: string;
  interpretation: string;
  urgentVet: boolean;
  barPosition: number;
}

export type BmiCategory = 'severely-underweight' | 'underweight' | 'ideal' | 'overweight' | 'obese';

const CATEGORIES: {
  category: BmiCategory;
  label: string;
  interpretation: string;
  urgentVet: boolean;
  min: number;
  max: number;
}[] = [
  {
    category: 'severely-underweight',
    label: 'Poważne niedożywienie',
    interpretation: 'Obliczone BMI sugeruje skrajnie niski poziom tkanki tłuszczowej. Żebra, kręgosłup i miednica mogą być wyraźnie widoczne. Zalecana jest pilna konsultacja weterynaryjna.',
    urgentVet: true,
    min: 0,
    max: 13
  },
  {
    category: 'underweight',
    label: 'Niedowaga',
    interpretation: 'Obliczone BMI sugeruje niedobór masy ciała. Żebra są łatwo wyczuwalne. Zalecana jest ocena żywieniowa przez weterynarza.',
    urgentVet: false,
    min: 13,
    max: 15
  },
  {
    category: 'ideal',
    label: 'Idealna kondycja',
    interpretation: 'Obliczone BMI sugeruje, że kot ma zdrową budowę ciała jak na swoje wymiary. Żebra wyczuwalne pod cienką warstwą tłuszczu, talia widoczna z góry.',
    urgentVet: false,
    min: 15,
    max: 25
  },
  {
    category: 'overweight',
    label: 'Nadwaga',
    interpretation: 'Obliczone BMI sugeruje nadmiar tkanki tłuszczowej. Talia staje się mniej wyraźna. Warto rozważyć regulację diety i konsultację z weterynarzem.',
    urgentVet: false,
    min: 25,
    max: 30
  },
  {
    category: 'obese',
    label: 'Otyłość',
    interpretation: 'Obliczone BMI sugeruje nadmierną ilość tkanki tłuszczowej. Zwiększone ryzyko cukrzycy, chorób stawów i innych problemów zdrowotnych. Zalecana konsultacja weterynaryjna i nadzorowana redukcja masy ciała.',
    urgentVet: true,
    min: 30,
    max: Infinity
  }
];

@Injectable({providedIn: 'root'})
export class BmiCalculatorService {
  calculate(weightKg: number, lengthCm: number): BmiResult {
    const lengthM = lengthCm / 100;
    const fBmi = Math.round((weightKg / (lengthM * lengthM)) * 10) / 10;

    const cat = CATEGORIES.find(c => fBmi >= c.min && fBmi < c.max) ?? CATEGORIES[CATEGORIES.length - 1];

    return {
      weightKg,
      lengthCm,
      fBmi,
      category: cat.category,
      label: cat.label,
      interpretation: cat.interpretation,
      urgentVet: cat.urgentVet,
      barPosition: this.toBarPosition(fBmi)
    };
  }

  // Maps fBMI to 0–100% across the visual scale (5 zones)
  private toBarPosition(fBmi: number): number {
    if (fBmi <= 0) return 0;
    if (fBmi < 13) return (fBmi / 13) * 20;
    if (fBmi < 15) return 20 + ((fBmi - 13) / 2) * 10;
    if (fBmi < 25) return 30 + ((fBmi - 15) / 10) * 30;
    if (fBmi < 30) return 60 + ((fBmi - 25) / 5) * 20;
    return Math.min(98, 80 + ((fBmi - 30) / 20) * 18);
  }
}