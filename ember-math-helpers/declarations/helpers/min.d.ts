export interface MinSignature {
    Args: {
        Positional: Array<number>;
    };
    Return: number;
}
/**
 * Takes two or more numbers, and finds the min of the set using `Math.min`
 *
 * ```hbs
 * {{min a b}}
 * ```
 *
 * @param numbers A list of numbers to pass to `Math.min`
 * @return The min of the set of numbers
 */
export declare function min(numbers: Array<number>): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: number[];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=min.d.ts.map