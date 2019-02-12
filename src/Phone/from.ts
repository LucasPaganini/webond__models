import { Either, left, right } from 'fp-ts/lib/Either'

import * as basicString from '../BasicString/from'

import { RawPhone } from './RawPhone'
import { Phone } from './Phone'

type Error = 'Invalid phone value'

const phoneRegex = /^\(?(\d\d)\)?\s*(\d?\d{4})[-.\s]*(\d{4})$/

/**
 * Attempt to instantiate a phone from a raw value.
 *
 * @param {RawPhone} value Raw phone value to instantiate the phone
 * @returns {Either<Error, Phone>} Either an error or a phone
 */
export const from = (value: RawPhone): Either<Error, Phone> => {
  const _basicString = basicString
    .from(value, { min: 8, max: 32 })
    .mapLeft<Error>(() => 'Invalid phone value')

  return _basicString.chain(_value => {
    return !phoneRegex.test(value)
      ? left<Error, Phone>(`Invalid phone value`)
      : right(new Phone(value))
  })
}
