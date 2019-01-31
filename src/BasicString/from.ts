import { Either, left, right } from 'fp-ts/lib/Either'

import { RawBasicString } from './RawBasicString'
import { BasicString } from './BasicString'

const MIN_LENGTH = 1
const MAX_LENGTH = 255

type Error = 'Must not be empty' | `Length too small` | `Max length exceeded`

/**
 * Try to instantiate from a raw value.
 *
 * @param {RawBasicString} rawValue Raw value
 * @returns {validation.Validation<string[], BasicString>} Error array or instance
 */
export const from = (value: RawBasicString): Either<Error, BasicString> => {
  return value.trim() === ''
    ? left<Error, BasicString>('Must not be empty')
    : value.length < MIN_LENGTH
    ? left<Error, BasicString>(`Length too small`)
    : value.length > MAX_LENGTH
    ? left<Error, BasicString>(`Max length exceeded`)
    : right(new BasicString(value))
}
