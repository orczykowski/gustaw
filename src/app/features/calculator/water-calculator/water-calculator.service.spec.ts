import {WaterCalculatorService} from './water-calculator.service';

describe('WaterCalculatorService', () => {
  let service: WaterCalculatorService;

  beforeEach(() => { service = new WaterCalculatorService(); });

  it('5 kg cat, no adjustments — base 250 mL, range 200–300', () => {
    const r = service.calculate({weightKg: 5, diet: null, activity: null, environment: null, lifeStage: null, pregnantOrNursing: false});
    expect(r.baseMl).toBe(250);
    expect(r.adjustedMl).toBe(250);
    expect(r.minMl).toBe(200);
    expect(r.maxMl).toBe(300);
  });

  it('status is normal for 5 kg with no adjustments', () => {
    const r = service.calculate({weightKg: 5, diet: null, activity: null, environment: null, lifeStage: null, pregnantOrNursing: false});
    expect(r.status).toBe('normal');
  });

  it('moderate activity adds 5%', () => {
    const r = service.calculate({weightKg: 4, diet: null, activity: 'moderate', environment: null, lifeStage: null, pregnantOrNursing: false});
    expect(r.adjustedMl).toBe(Math.round(200 * 1.05));
    expect(r.adjustmentsApplied.length).toBe(1);
  });

  it('high activity adds 10%', () => {
    const r = service.calculate({weightKg: 4, diet: null, activity: 'high', environment: null, lifeStage: null, pregnantOrNursing: false});
    expect(r.adjustedMl).toBe(Math.round(200 * 1.10));
  });

  it('hot environment adds 10%', () => {
    const r = service.calculate({weightKg: 5, diet: null, activity: null, environment: 'hot', lifeStage: null, pregnantOrNursing: false});
    expect(r.adjustedMl).toBe(Math.round(250 * 1.10));
  });

  it('pregnancy adds 30%', () => {
    const r = service.calculate({weightKg: 4, diet: null, activity: null, environment: null, lifeStage: null, pregnantOrNursing: true});
    expect(r.adjustedMl).toBe(Math.round(200 * 1.30));
    expect(r.pregnancyNote).toBeTruthy();
  });

  it('pregnancy + hot + high activity stacks multipliers', () => {
    const r = service.calculate({weightKg: 5, diet: null, activity: 'high', environment: 'hot', lifeStage: null, pregnantOrNursing: true});
    expect(r.adjustedMl).toBe(Math.round(250 * 1.10 * 1.10 * 1.30));
    expect(r.adjustmentsApplied.length).toBe(3);
    expect(r.status).toBe('elevated');
  });

  it('diet note populated for dry food', () => {
    const r = service.calculate({weightKg: 5, diet: 'dry', activity: null, environment: null, lifeStage: null, pregnantOrNursing: false});
    expect(r.dietNote).toContain('sucha karma');
  });

  it('low activity produces no adjustment', () => {
    const r = service.calculate({weightKg: 5, diet: null, activity: 'low', environment: null, lifeStage: null, pregnantOrNursing: false});
    expect(r.adjustedMl).toBe(r.baseMl);
    expect(r.adjustmentsApplied.length).toBe(0);
  });
});
