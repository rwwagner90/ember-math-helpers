export interface MultSignature {
    Args: {
        Positional: Array<number>;
    };
    Return: number;
}
/**
 * Multiplies two or more numbers
 *
 * ```hbs
 * {{mult a b}}
 * ```
 *
 * @param numbers A list of numbers to multiply
 * @return The product of all the passed numbers
 */
export declare function mult(numbers: Array<number>): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: number[];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=mult.d.ts.map