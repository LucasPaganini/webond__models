import { RawPassword } from './RawPassword'

/**
 * Value object representing a password.
 */
export class Password {
  /**
   * @param {RawPassword} _rawValue
   */
  constructor(private _rawValue: RawPassword) {}

  /**
   * Returns the raw value for serialization purposes.
   *
   * @returns {RawPassword} Raw value
   */
  toJSON(): RawPassword {
    return this.valueOf()
  }

  /**
   * Returns the raw value.
   *
   * @returns {RawPassword} Raw value
   */
  valueOf(): RawPassword {
    return this._rawValue
  }
}
