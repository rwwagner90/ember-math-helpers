export interface ModSignature {
    Args: {
        Positional: Array<number>;
    };
    Return: number;
}
/**
 * Takes the modulus of two or more numbers
 *
 * ```hbs
 * {{mod a b}}
 * ```
 *
 * @param numbers A list of numbers to modulus
 * @return The modulus of all the passed numbers
 */
export declare function mod(numbers: Array<number>): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: number[];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=mod.d.ts.map