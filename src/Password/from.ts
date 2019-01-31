import { Either, left, right } from 'fp-ts/lib/Either'

import { Password } from './Password'
import { RawPassword } from './RawPassword'

type Error =
  | 'Must have at least 8 characters'
  | 'Must have less than 64 characters'
  | 'Must have at least one lowercase letter'
  | 'Must have at least one uppercase letter'
  | 'Must have at least one number'
  | 'Must not have tabs (\\t) or line breaks (\\n)'

export const from = (value: RawPassword): Either<Error, Password> => {
  return value.length < 8
    ? left<Error, Password>('Must have at least 8 characters')
    : value.length > 64
    ? left<Error, Password>('Must have less than 64 characters')
    : value.search(/[a-z]/) === -1
    ? left<Error, Password>('Must have at least one lowercase letter')
    : value.search(/[A-Z]/) === -1
    ? left<Error, Password>('Must have at least one uppercase letter')
    : value.search(/[0-9]/) === -1
    ? left<Error, Password>('Must have at least one number')
    : value.search(/[\t\n]/) !== -1
    ? left<Error, Password>('Must not have tabs (\\t) or line breaks (\\n)')
    : right(new Password(value))
}
