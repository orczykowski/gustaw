export class CalorityCalculationResult {
  private readonly _der: number;
  private readonly _rer: number;
  private readonly _unit: string = "kcl";
  private readonly calculationMethod: string;

  constructor(der: number, rer: number, calculationMethod: string) {
    this._der = der;
    this._rer = rer;
    this.calculationMethod = calculationMethod;
  }

  get rer(): number {
    return this._rer;
  }

  get der(): number {
    return this._der;
  }

  get unit(): string {
    return this._unit;
  }
}
