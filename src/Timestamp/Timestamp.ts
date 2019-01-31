import { RawTimestamp } from './RawTimestamp'

/**
 * Value object representing a UNIX timestamp.
 */
export class Timestamp {
  /**
   * @param {RawTimestamp} _rawValue Integer timestamp indicating seconds since 01/01/1970
   */
  constructor(private _rawValue: RawTimestamp) {}

  /**
   * Returns the raw value for serialization purposes.
   *
   * @returns {RawTimestamp} Raw value
   */
  toJSON(): RawTimestamp {
    return this.valueOf()
  }

  /**
   * Returns the raw value.
   *
   * @returns {RawTimestamp} Raw value
   */
  valueOf(): RawTimestamp {
    return this._rawValue
  }
}
