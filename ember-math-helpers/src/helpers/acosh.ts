import { helper } from '@ember/component/helper';

export interface AcoshSignature {
  Args: {
    Positional: [number];
  };
  Return: number;
}

/**
 * Executes `Math.acosh` on the number passed to the helper.
 *
 * ```hbs
 * {{acosh a}}
 * ```
 *
 * @param number The number to pass to `Math.acosh`
 * @return The acosh of the passed number
 */
export function acosh([number]: [number]) {
  return Math.acosh(number);
}

export default helper<AcoshSignature>(acosh);
