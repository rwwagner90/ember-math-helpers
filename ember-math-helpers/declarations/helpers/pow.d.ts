export interface PowSignature {
    Args: {
        Positional: Array<number>;
    };
    Return: number;
}
/**
 * Takes two or more numbers, using the first as the base number,
 * then using each subsequent number as an exponent to the previous value
 *
 * ```hbs
 * {{pow a b}}
 * ```
 *
 * @param numbers A list of numbers to pass to `Math.pow`
 * @return The base raised to all exponents
 */
export declare function pow(numbers: Array<number>): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: number[];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=pow.d.ts.map