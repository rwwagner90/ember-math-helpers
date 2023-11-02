import { helper } from '@ember/component/helper';

export interface FroundSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.fround` on the number passed to the helper.
 *
 * ```hbs
 * {{fround a}}
 * ```
 *
 * @param number The number to pass to `Math.fround`
 * @return The fround of the passed number
 */
export function fround([number]: [number]) {
  return Math.fround(number);
}

export default helper<FroundSignature>(fround);
