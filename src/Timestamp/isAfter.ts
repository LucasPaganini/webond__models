import { Timestamp } from './Timestamp'

/**
 * Is the first timestamp after the second one?
 *
 * @param {Timestamp} timestamp The timestamp that should be after the other one to return true
 * @param {Timestamp} timestampToCompare The timestamp to compare with
 * @returns {boolean} The first timestamp is after the second timestamp
 */
export const isAfter = (
  timestamp: Timestamp,
  timestampToCompare: Timestamp,
): boolean => {
  return timestamp.valueOf() > timestampToCompare.valueOf()
}
