import {BcsCalculatorService} from './bcs-calculator.service';

describe('BcsCalculatorService', () => {
  let service: BcsCalculatorService;

  beforeEach(() => { service = new BcsCalculatorService(); });

  it('BCS 5 — ideal weight equals current weight', () => {
    const r = service.calculate(5, 5);
    expect(r.idealWeightKg).toEqual(5);
    expect(r.weightDifferenceKg).toEqual(0);
  });

  it('BCS 7 — overweight cat loses 1.4 kg', () => {
    const r = service.calculate(7, 7);
    expect(r.idealWeightKg).toEqual(5.6);
    expect(r.weightDifferenceKg).toEqual(1.4);
  });

  it('BCS 3 — underweight cat gains 1 kg', () => {
    const r = service.calculate(4, 3);
    expect(r.idealWeightKg).toEqual(5);
    expect(r.weightDifferenceKg).toEqual(-1);
  });

  it('BCS 9 — severely obese, urgent vet flag set', () => {
    const r = service.calculate(9, 9);
    expect(r.info.urgentVet).toBeTrue();
    expect(r.idealWeightKg).toEqual(6);
  });

  it('BCS 1 — severely underweight, urgent vet flag set', () => {
    const r = service.calculate(3, 1);
    expect(r.info.urgentVet).toBeTrue();
    expect(r.idealWeightKg).toEqual(5);
  });

  it('BCS 6 — slight excess 12.5%', () => {
    const r = service.calculate(4.5, 6);
    expect(r.idealWeightKg).toEqual(4);
    expect(r.deviationPercent).toEqual(12.5);
  });
});
