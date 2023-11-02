export interface Log10Signature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.log10` on the number passed to the helper.
 *
 * ```hbs
 * {{log10 a}}
 * ```
 *
 * @param number The number to pass to `Math.log10`
 * @return The log10 of the passed number
 */
export declare function log10([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=log10.d.ts.map