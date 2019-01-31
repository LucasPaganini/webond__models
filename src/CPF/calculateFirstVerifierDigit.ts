import { RawCPF } from './RawCPF'

export const calculateFirstVerifierDigit = (value: RawCPF): number => {
  const first9Sum = value
    .split('')
    .map(d => parseInt(d))
    .slice(0, 9)
    .map((n, i) => n * (10 - i))
    .reduce((acc, cur) => acc + cur, 0)
  const rest = (first9Sum * 10) % 11
  return rest === 11 ? 0 : rest === 10 ? 0 : rest
}
