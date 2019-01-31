import { RawBasicString } from './RawBasicString'

/**
 * Value object representing a basic string.
 */
export class BasicString {
  /**
   * @param {RawBasicString} rawValue
   */
  constructor(private _rawValue: RawBasicString) {}

  /**
   * Returns the raw value for serialization purposes.
   *
   * @returns {RawBasicString} Raw value
   */
  toJSON(): RawBasicString {
    return this.valueOf()
  }

  /**
   * Returns the raw value.
   *
   * @returns {RawBasicString} Raw value
   */
  valueOf(): RawBasicString {
    return this._rawValue
  }
}
