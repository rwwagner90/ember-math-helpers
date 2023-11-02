import { helper } from '@ember/component/helper';

export interface Log10Signature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.log10` on the number passed to the helper.
 *
 * ```hbs
 * {{log10 a}}
 * ```
 *
 * @param number The number to pass to `Math.log10`
 * @return The log10 of the passed number
 */
export function log10([number]: [number]) {
  return Math.log10(number);
}

export default helper<Log10Signature>(log10);
