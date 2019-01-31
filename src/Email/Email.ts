import { RawEmail } from './RawEmail'

/**
 * Value object representing an email.
 */
export class Email {
  /**
   * @param {RawEmail} rawValue
   */
  constructor(private _rawValue: RawEmail) {}

  /**
   * Returns the raw value for serialization purposes.
   *
   * @returns {RawEmail} Raw value
   */
  toJSON(): RawEmail {
    return this.valueOf()
  }

  /**
   * Returns the raw value.
   *
   * @returns {RawEmail} Raw value
   */
  valueOf(): RawEmail {
    return this._rawValue
  }
}
