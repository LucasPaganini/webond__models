import { Either, left, right } from 'fp-ts/lib/Either'

import { RawBasicString } from './RawBasicString'
import { BasicString } from './BasicString'

export type Error =
  | 'Must not be empty'
  | `Length too small`
  | `Max length exceeded`

interface Options {
  min: number
  max: number
}

const defaultOptions: Options = {
  min: 1,
  max: 255,
}

/**
 * Try to instantiate from a raw value.
 *
 * @param {RawBasicString} rawValue Raw value
 * @returns {validation.Validation<string[], BasicString>} Error array or instance
 */
export const from = (
  value: RawBasicString,
  options?: Partial<Options>,
): Either<Error, BasicString> => {
  const _options: Options = { ...defaultOptions, ...options }
  const _value = value.trim()

  return _value === ''
    ? left<Error, BasicString>('Must not be empty')
    : _value.length < _options.min
    ? left<Error, BasicString>(`Length too small`)
    : _value.length > _options.max
    ? left<Error, BasicString>(`Max length exceeded`)
    : right(new BasicString(_value))
}
