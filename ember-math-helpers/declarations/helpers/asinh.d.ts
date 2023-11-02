export interface AsinhSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.asinh` on the number passed to the helper.
 *
 * ```hbs
 * {{asinh a}}
 * ```
 *
 * @param number The number to pass to `Math.asinh`
 * @return The asinh of the passed number
 */
export declare function asinh([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=asinh.d.ts.map