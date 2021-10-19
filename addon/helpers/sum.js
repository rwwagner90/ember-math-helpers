import { helper } from '@ember/component/helper';
import { add } from './add';

/**
 * Alias for {{add}} helper
 *
 * ```hbs
 * {{sum a b}}
 * ```
 *
 * @param {number[]} numbers A list of numbers to sum
 * @return {number} The sum of all the passed numbers
 */
export function sum(numbers) {
  return add(numbers);
}

export default helper(sum);
