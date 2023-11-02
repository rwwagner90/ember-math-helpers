import { helper } from '@ember/component/helper';

export interface Log1pSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.log1p` on the number passed to the helper.
 *
 * ```hbs
 * {{log1p a}}
 * ```
 *
 * @param number The number to pass to `Math.log1p`
 * @return The log1p of the passed number
 */
export function log1p([number]: [number]) {
  return Math.log1p(number);
}

export default helper<Log1pSignature>(log1p);
