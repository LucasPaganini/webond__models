import { Either, left, right } from 'fp-ts/lib/Either'

import * as basicString from '../BasicString/from'
import { BasicString } from '../BasicString'

import { Email } from './Email'
import { RawEmail } from './RawEmail'

type Error = 'Invalid email value' | basicString.Error
// Email validation reference: https://github.com/angular/angular/blob/0e95a20576536111a5f8406b3f4655f8561c416c/packages/forms/src/validators.ts#L60
const emailRegex = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/

/**
 * Attempt to instantiate an email from a raw value.
 *
 * @param {RawPhone} value Raw email value to instantiate the email
 * @returns {Either<Error, Email>} Either an error or an email
 */
export const from = (value: RawEmail): Either<Error, Email> => {
  return (basicString.from(value) as Either<Error, BasicString>).chain(b => {
    return !emailRegex.test(b.valueOf())
      ? left<Error, Email>(`Invalid email value`)
      : right(new Email(value))
  })
}
