export interface LcmSignature {
    Args: {
        Positional: [number, number];
    };
    Return: number;
}
/**
 * Returns the smallest positive integer that is divisible by both number1 and number2
 *
 * ```hbs
 * {{lcm a b}}
 * ```
 *
 * @param number1 The first number
 * @param number2 The second number
 * @return The LCM of the two numbers passed
 */
export declare function lcm([number1, number2]: [(number | undefined)?, (number | undefined)?]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number, number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=lcm.d.ts.map