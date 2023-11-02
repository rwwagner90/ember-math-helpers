import { helper } from '@ember/component/helper';

export interface AsinSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.asin` on the number passed to the helper.
 *
 * ```hbs
 * {{asin a}}
 * ```
 *
 * @param number The number to pass to `Math.asin`
 * @return The asin of the passed number
 */
export function asin([number]: [number]) {
  return Math.asin(number);
}

export default helper<AsinSignature>(asin);
