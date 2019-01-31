import { Timestamp } from './Timestamp'

/**
 * Create a timestamp of now.
 *
 * @returns {Timestamp} Timestamp instance
 */
export const now = (): Timestamp => {
  return new Timestamp(Date.now())
}
