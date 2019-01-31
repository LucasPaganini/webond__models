import { Timestamp } from './Timestamp'

/**
 * Is the first timestamp before the second one?
 *
 * @param {Timestamp} timestamp The timestamp that should be before the other one to return true
 * @param {Timestamp} timestampToCompare The timestamp to compare with
 * @returns {boolean} The first timestamp is before the second timestamp
 */
export const isBefore = (
  timestamp: Timestamp,
  timestampToCompare: Timestamp,
): boolean => {
  return timestamp.valueOf() < timestampToCompare.valueOf()
}
