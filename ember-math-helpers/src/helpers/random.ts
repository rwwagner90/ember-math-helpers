import { helper } from '@ember/component/helper';

export interface RandomSignature {
  Args: {
    Named: { decimals?: number };
    Positional: [upperBound?: number, lowerBound?: number];
  };
  Return: number;
}

// @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed#max(0, min(MAX_DECIMALS, decimals))));
const MAX_DECIMALS = 20;

/**
 * Executes `Math.random` with the provided upper-bounded randoms, lower- and upper-bounded randoms,
 * and the option to configure decimal precision.
 *
 * ```hbs
 * {{random}} or {{random decimals=4}}
 * ```
 *
 * ```hbs
 * {{random 42}} or {{random 42 decimals=4}}
 * ```
 *
 * ```hbs
 * {{random 21 1797}} or {{random 21 1797 decimals=4}}
 * ```
 *
 * @param upperBound
 * @param lowerBound
 * @param {object} { decimals } decimal precision value
 * @return The random generated number
 */
export function random(
  [upperBound, lowerBound]: RandomSignature['Args']['Positional'],
  { decimals }: RandomSignature['Args']['Named'],
) {
  // no positional args, but only an options hash from named args
  if (typeof upperBound === 'undefined' && typeof lowerBound === 'undefined') {
    decimals = decimals ?? 0;

    return +Math.random().toFixed(
      Math.max(0, Math.min(MAX_DECIMALS, decimals)),
    );
  }

  // one positional arg: treat it as an upper bound
  if (typeof upperBound !== 'undefined' && typeof lowerBound === 'undefined') {
    return +(Math.random() * upperBound).toFixed(
      Math.max(0, Math.min(MAX_DECIMALS, decimals ?? 0)),
    );
  }

  // two positional args: use them to derive upper and lower bounds
  if (typeof upperBound !== 'undefined' && typeof lowerBound !== 'undefined') {
    // for convenience, swap if a higher number is accidentally passed first
    if (upperBound < lowerBound) {
      [lowerBound, upperBound] = [upperBound, lowerBound];
    }

    return +(lowerBound + Math.random() * (upperBound - lowerBound)).toFixed(
      Math.max(0, Math.min(MAX_DECIMALS, decimals ?? 0)),
    );
  }

  // no positional or named args: just return Math.random() w/ default decimal precision
  return +Math.random().toFixed(
    Math.max(0, Math.min(MAX_DECIMALS, decimals ?? 0)),
  );
}

export default helper<RandomSignature>(random);
