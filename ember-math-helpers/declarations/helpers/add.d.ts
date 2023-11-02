export interface AddSignature {
    Args: {
        Positional: Array<number>;
    };
    Return: number;
}
/**
 * Sums two or more numbers
 *
 * ```hbs
 * {{add a b}}
 * ```
 *
 * @param numbers A list of numbers to sum
 * @return The sum of all the passed numbers
 */
export declare function add(numbers: Array<number>): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: number[];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=add.d.ts.map