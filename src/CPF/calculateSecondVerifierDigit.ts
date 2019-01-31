import { RawCPF } from './RawCPF'

export const calculateSecondVerifierDigit = (value: RawCPF): number => {
  const first10Sum = value
    .split('')
    .map(d => parseInt(d))
    .slice(0, 10)
    .map((n, i) => n * (11 - i))
    .reduce((acc, cur) => acc + cur, 0)
  const rest = (first10Sum * 10) % 11
  return rest === 11 ? 0 : rest === 10 ? 0 : rest
}
