import { RawPhone } from './RawPhone'

/**
 * Value object representing a phone.
 */
export class Phone {
  /**
   * @param {RawPhone} rawValue
   */
  constructor(private _rawValue: RawPhone) {}

  /**
   * Returns the raw value for serialization purposes.
   *
   * @returns {RawPhone} Raw value
   */
  toJSON(): RawPhone {
    return this.valueOf()
  }

  /**
   * Returns the raw value.
   *
   * @returns {RawPhone} Raw value
   */
  valueOf(): RawPhone {
    return this._rawValue
  }
}
