import { helper } from '@ember/component/helper';

export interface ImulSignature {
  Args: {
    Positional: [number, number];
  };
  Return: number;
}

/**
 * Executes `Math.imul` on the number passed to the helper.
 *
 * ```hbs
 * {{imul a}}
 * ```
 *
 * @param number1 The first number to pass to `Math.imul`
 * @param number2 The second number to pass to `Math.imul`
 * @return The imul of the passed numbers
 */
export function imul([number1, number2]: [number, number]) {
  return Math.imul(number1, number2);
}

export default helper<ImulSignature>(imul);
