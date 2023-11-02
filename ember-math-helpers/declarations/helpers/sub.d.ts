export interface SubSignature {
    Args: {
        Positional: Array<number>;
    };
    Return: number;
}
/**
 * Subtracts two or more numbers
 *
 * ```hbs
 * {{sub a b}}
 * ```
 *
 * @param numbers A list of numbers to subtract
 * @return The difference of all the passed numbers
 */
export declare function sub(numbers: Array<number>): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: number[];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=sub.d.ts.map