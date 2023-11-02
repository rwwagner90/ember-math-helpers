import { helper } from '@ember/component/helper';

export interface SqrtSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.sqrt` on the number passed to the helper.
 *
 * ```hbs
 * {{sqrt a}}
 * ```
 *
 * @param number The number to pass to `Math.sqrt`
 * @return The sqrt of the passed number
 */
export function sqrt([number]: [number]) {
  return Math.sqrt(number);
}

export default helper<SqrtSignature>(sqrt);
