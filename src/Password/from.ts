import { Either, left, right } from 'fp-ts/lib/Either'

import * as basicString from '../BasicString/from'
import { BasicString } from '../BasicString'

import { Password } from './Password'
import { RawPassword } from './RawPassword'

type _Error =
  | 'Must have at least one lowercase letter'
  | 'Must have at least one uppercase letter'
  | 'Must have at least one number'
  | 'Must not have tabs (\\t) or line breaks (\\n)'

type _BasicStringMappedError =
  | 'Must not be empty'
  | 'Must have at least 8 characters'
  | 'Must have less than 255 characters'

type Error = _Error | _BasicStringMappedError

export const from = (value: RawPassword): Either<Error, Password> => {
  const fn = (_value: BasicString): Either<_Error, Password> => {
    const __value = _value.valueOf()
    return __value.search(/[a-z]/) === -1
      ? left<_Error, Password>('Must have at least one lowercase letter')
      : __value.search(/[A-Z]/) === -1
      ? left<_Error, Password>('Must have at least one uppercase letter')
      : __value.search(/[0-9]/) === -1
      ? left<_Error, Password>('Must have at least one number')
      : __value.search(/[\t\n]/) !== -1
      ? left<_Error, Password>('Must not have tabs (\\t) or line breaks (\\n)')
      : right(new Password(__value))
  }

  const _basicString = basicString
    .from(value, { min: 8, max: 255 })
    .mapLeft<_BasicStringMappedError>(err => {
      switch (err) {
        case 'Length too small':
          return 'Must have at least 8 characters'
        case 'Max length exceeded':
          return 'Must have less than 255 characters'
        default:
          return err
      }
    })

  return (_basicString as Either<Error, BasicString>).chain(fn)
}
