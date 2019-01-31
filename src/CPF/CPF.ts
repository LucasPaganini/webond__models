import { RawCPF } from './RawCPF'

/**
 * Value object representing a CPF.
 */
export class CPF {
  /**
   * @param {RawCPF} _rawValue
   */
  constructor(private _rawValue: RawCPF) {}

  /**
   * Returns the raw value for serialization purposes.
   *
   * @returns {RawCPF} Raw value
   */
  toJSON(): RawCPF {
    return this.valueOf()
  }

  /**
   * Returns the raw value.
   *
   * @returns {RawCPF} Raw value
   */
  valueOf(): RawCPF {
    return this._rawValue
  }
}
