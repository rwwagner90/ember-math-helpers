export interface Log2Signature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.log2` on the number passed to the helper.
 *
 * ```hbs
 * {{log2 a}}
 * ```
 *
 * @param number The number to pass to `Math.log2`
 * @return The log2 of the passed number
 */
export declare function log2([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=log2.d.ts.map