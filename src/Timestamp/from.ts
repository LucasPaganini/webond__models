import { Either, left, right } from 'fp-ts/lib/Either'

import { Timestamp } from './Timestamp'
import { RawTimestamp } from './RawTimestamp'

type Error = 'Value should be an integer'

/**
 * Attempt to instantiate a timestamp from a raw value.
 *
 * @param {RawTimestamp} value Raw timestamp value to instantiate the timestamp
 * @returns {Either<Error, Timestamp>} Either an error or a timestamp
 */
export const from = (value: RawTimestamp): Either<Error, Timestamp> => {
  return !Number.isInteger(value)
    ? left<Error, Timestamp>('Value should be an integer')
    : right(new Timestamp(value))
}
