import { Either, left, right } from 'fp-ts/lib/Either'

import * as basicString from '../BasicString/from'

import { RawCPF } from './RawCPF'
import { CPF } from './CPF'
import { calculateFirstVerifierDigit } from './calculateFirstVerifierDigit'
import { calculateSecondVerifierDigit } from './calculateSecondVerifierDigit'

const BLACK_LISTED_VALUES = new Set([
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999',
])

type Error =
  | 'Invalid CPF format'
  | `Value is blacklisted`
  | `Invalid first verifier digit`
  | `Invalid second verifier digit`

export const from = (value: RawCPF): Either<Error, CPF> => {
  const _basicString = basicString
    .from(value, { min: 8, max: 32 })
    .mapLeft<Error>(() => 'Invalid CPF format')

  return _basicString.chain(bs => {
    const _value = bs.valueOf()
    return BLACK_LISTED_VALUES.has(_value)
      ? left<Error, CPF>(`Value is blacklisted`)
      : parseInt(_value[9]) !== calculateFirstVerifierDigit(_value)
      ? left<Error, CPF>(`Invalid first verifier digit`)
      : parseInt(_value[10]) !== calculateSecondVerifierDigit(_value)
      ? left<Error, CPF>(`Invalid second verifier digit`)
      : right(new CPF(_value))
  })
}
