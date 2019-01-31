import { now } from './now'
import { Timestamp } from './Timestamp'
import { isAfter } from './isAfter'

/**
 * Is the given timestamp in the future?
 *
 * @param {Timestamp} timestamp The timestamp that should be in the future to return true
 * @returns {boolean} The timestamp is in the future
 */
export const isFuture = (timestamp: Timestamp): boolean => {
  return isAfter(timestamp, now())
}
