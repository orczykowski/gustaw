import {AgeCalculatorService} from './age-calculator.service';

describe('AgeCalculatorService', () => {
  let service: AgeCalculatorService;

  beforeEach(() => {
    service = new AgeCalculatorService();
  });
  it('should calculate age for 1 month old cat', () => {
    expect(service.calculate(1 / 12).catAge).toEqual(0.5);
  });
  it('should calculate age for 2 months old cat', () => {
    expect(service.calculate(2 / 12).catAge).toEqual(2);
  });
  it('should calculate age for 3 months old cat', () => {
    expect(service.calculate(3 / 12).catAge).toEqual(5);
  });
  it('should calculate age for 4 months old cat', () => {
    expect(service.calculate(4 / 12).catAge).toEqual(6);
  });
  it('should calculate age for 5 months old cat', () => {
    expect(service.calculate(5 / 12).catAge).toEqual(7);
  });
  it('should calculate age for 6 months old cat', () => {
    expect(service.calculate(6 / 12).catAge).toEqual(10);
  });
  it('should calculate age for 7 months old cat', () => {
    expect(service.calculate(7 / 12).catAge).toEqual(12);
  });
  it('should calculate age for 8 months old cat', () => {
    expect(service.calculate(8 / 12).catAge).toEqual(13);
  });
  it('should calculate age for 1 year old cat', () => {
    expect(service.calculate(1).catAge).toEqual(15);
  });
  it('should calculate age for 14 months old cat', () => {
    expect(service.calculate(14 / 12).catAge).toEqual(17);
  });
  it('should calculate age for 18 months old cat', () => {
    expect(service.calculate(18 / 12).catAge).toEqual(20);
  });
  it('should calculate age for 19 months old cat', () => {
    expect(service.calculate(19 / 12).catAge).toEqual(22);
  });
  it('should calculate age for 2 years old cat', () => {
    expect(service.calculate(2).catAge).toEqual(24);
  });
  it('should calculate age for 4 years old cat', () => {
    expect(service.calculate(4).catAge).toEqual(32);
  });
});
