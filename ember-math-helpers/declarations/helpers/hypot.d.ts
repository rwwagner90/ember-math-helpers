export interface HypotSignature {
    Args: {
        Positional: Array<number>;
    };
    Return: number;
}
/**
 * Takes two or more numbers, and returns the square root of the sum of squares of them using `Math.hypot`
 *
 * ```hbs
 * {{max a b}}
 * ```
 *
 * @param numbers A list of numbers to pass to `Math.hypot`
 * @return The hypot of the set of numbers
 */
export declare function hypot(numbers: Array<number>): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: number[];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=hypot.d.ts.map