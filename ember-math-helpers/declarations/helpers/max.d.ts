export interface MaxSignature {
    Args: {
        Positional: Array<number>;
    };
    Return: number;
}
/**
 * Takes two or more numbers, and finds the max of the set using `Math.max`
 *
 * ```hbs
 * {{max a b}}
 * ```
 *
 * @param numbers A list of numbers to pass to `Math.max`
 * @return The max of the set of numbers
 */
export declare function max(numbers: Array<number>): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: number[];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=max.d.ts.map