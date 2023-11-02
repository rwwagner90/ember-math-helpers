export interface GcdSignature {
    Args: {
        Positional: [number, number];
    };
    Return: number;
}
/**
 * Returns the greatest positive integer that divides each of two integers
 *
 * ```hbs
 * {{gcd a b}}
 * ```
 *
 * @param number1 The first number
 * @param number2 The second number
 * @return The GCD of the two numbers passed
 */
export declare function gcd([number1, number2]: [(number | undefined)?, (number | undefined)?]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number, number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=gcd.d.ts.map