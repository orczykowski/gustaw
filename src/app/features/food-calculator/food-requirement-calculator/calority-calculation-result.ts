export class CalorityCalculationResult {
  private readonly _der: number;
  private readonly _unit: string = "kcl";
  private readonly calculationMethod: string;

  constructor(der: number, calculationMethod: string) {
    this._der = der;
    this.calculationMethod = calculationMethod;
  }

  get der(): number {
    return this._der;
  }

  get unit(): string {
    return this._unit;
  }
}
