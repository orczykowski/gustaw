import {BmiCalculatorService} from './bmi-calculator.service';

describe('BmiCalculatorService', () => {
  let service: BmiCalculatorService;

  beforeEach(() => {
    service = new BmiCalculatorService();
  });

  it('should calculate fBMI correctly for example in spec (5 kg / 50 cm = 20.0)', () => {
    const result = service.calculate(5.0, 50);
    expect(result.fBmi).toBe(20.0);
    expect(result.category).toBe('ideal');
  });

  it('should classify severely underweight when fBMI < 13', () => {
    const result = service.calculate(2.0, 50); // fBMI = 8.0
    expect(result.category).toBe('severely-underweight');
    expect(result.urgentVet).toBeTrue();
  });

  it('should classify underweight for fBMI between 13 and 15', () => {
    const result = service.calculate(3.25, 50); // fBMI = 13.0
    expect(result.category).toBe('underweight');
  });

  it('should classify overweight for fBMI between 25 and 30', () => {
    const result = service.calculate(6.25, 50); // fBMI = 25.0
    expect(result.category).toBe('overweight');
  });

  it('should classify obese when fBMI >= 30', () => {
    const result = service.calculate(7.5, 50); // fBMI = 30.0
    expect(result.category).toBe('obese');
    expect(result.urgentVet).toBeTrue();
  });

  it('bar position for ideal weight should be between 30 and 60', () => {
    const result = service.calculate(5.0, 50); // fBMI = 20.0
    expect(result.barPosition).toBeGreaterThanOrEqual(30);
    expect(result.barPosition).toBeLessThanOrEqual(60);
  });
});