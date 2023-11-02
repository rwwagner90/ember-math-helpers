import { helper } from '@ember/component/helper';

export interface RoundSignature {
  Args: {
    Named: { decimals?: number; exp?: number };
    Positional: [number];
  };
  Return: number;
}

// adapted from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round#Decimal_rounding
/**
 * Decimal adjustment of a number.
 *
 * @param value The number.
 * @param exp The exponent (the 10 logarithm of the adjustment base).
 * @return The adjusted value.
 */
function decimalAdjust(value: number, exp: number): number {
  // If the exp is undefined or zero...
  if (typeof exp === 'undefined' || +exp === 0) {
    return Math.round(value);
  }

  value = +value;
  exp = +exp;

  // If the value is not a number or the exp is not an integer...
  if (
    value === null ||
    isNaN(value) ||
    !(typeof exp === 'number' && exp % 1 === 0)
  ) {
    return NaN;
  }

  // If the value is negative...
  if (value < 0) {
    return -decimalAdjust(-value, exp);
  }

  // Shift
  let splitValue = value.toString().split('e');
  value = Math.round(+`${splitValue[0]}e${splitValue[1] ? +splitValue[1] - exp : -exp}`);
  // Shift back
  splitValue = value.toString().split('e');

  return +`${splitValue[0]}e${splitValue[1] ? +splitValue[1] + exp : exp}`;
}

export function round(
  [number]: [number],
  namedArgs: RoundSignature['Args']['Named'],
) {
  if (namedArgs) {
    if (namedArgs.decimals) {
      return decimalAdjust(number, -namedArgs.decimals);
    }

    if (namedArgs.exp) {
      return decimalAdjust(number, namedArgs.exp);
    }
  }

  return Math.round(number);
}

export default helper<RoundSignature>(round);
