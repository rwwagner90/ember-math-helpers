export interface DivSignature {
    Args: {
        Positional: Array<number>;
    };
    Return: number;
}
/**
 * Divides two or more numbers
 *
 * ```hbs
 * {{div a b}}
 * ```
 *
 * @param numbers A list of numbers to divide
 * @return The result of dividing all the passed numbers
 */
export declare function div(numbers: Array<number>): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: number[];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=div.d.ts.map