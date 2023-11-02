import { helper } from '@ember/component/helper';

export interface SinSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.sin` on the number passed to the helper.
 *
 * ```hbs
 * {{sin a}}
 * ```
 *
 * @param number The number to pass to `Math.sin`
 * @return The sin of the passed number
 */
export function sin([number]: [number]) {
  return Math.sin(number);
}

export default helper<SinSignature>(sin);
