export interface Expm1Signature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.expm1` on the number passed to the helper.
 *
 * ```hbs
 * {{expm1 a}}
 * ```
 *
 * @param number The number to pass to `Math.expm1`
 * @return The expm1 of the passed number
 */
export declare function expm1([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=expm1.d.ts.map