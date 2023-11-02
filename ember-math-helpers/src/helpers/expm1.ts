import { helper } from '@ember/component/helper';

export interface Expm1Signature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.expm1` on the number passed to the helper.
 *
 * ```hbs
 * {{expm1 a}}
 * ```
 *
 * @param number The number to pass to `Math.expm1`
 * @return The expm1 of the passed number
 */
export function expm1([number]: [number]) {
  return Math.expm1(number);
}

export default helper<Expm1Signature>(expm1);
