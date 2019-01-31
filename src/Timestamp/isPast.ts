import { now } from './now'
import { isBefore } from './isBefore'
import { Timestamp } from './Timestamp'

/**
 * Is the given timestamp in the past?
 *
 * @param {Timestamp} timestamp The timestamp that should be in the past to return true
 * @returns {boolean} The timestamp is in the past
 */
export const isPast = (timestamp: Timestamp): boolean => {
  return isBefore(timestamp, now())
}
