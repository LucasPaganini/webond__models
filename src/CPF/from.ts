import { Either, left, right } from 'fp-ts/lib/Either'

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
  | `Value is blacklisted`
  | `Invalid first verifier digit`
  | `Invalid second verifier digit`

export const from = (value: RawCPF): Either<Error, CPF> => {
  return BLACK_LISTED_VALUES.has(value)
    ? left<Error, CPF>(`Value is blacklisted`)
    : parseInt(value[9]) !== calculateFirstVerifierDigit(value)
    ? left<Error, CPF>(`Invalid first verifier digit`)
    : parseInt(value[10]) !== calculateSecondVerifierDigit(value)
    ? left<Error, CPF>(`Invalid second verifier digit`)
    : right(new CPF(value))
}
