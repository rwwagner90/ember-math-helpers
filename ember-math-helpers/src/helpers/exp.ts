import { helper } from '@ember/component/helper';

export interface ExpSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.exp` on the number passed to the helper.
 *
 * ```hbs
 * {{exp a}}
 * ```
 *
 * @param number The number to pass to `Math.exp`
 * @return The exp of the passed number
 */
export function exp([number]: [number]) {
  return Math.exp(number);
}

export default helper<ExpSignature>(exp);
