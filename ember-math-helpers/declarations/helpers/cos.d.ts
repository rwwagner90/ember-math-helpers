export interface CosSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.cos` on the number passed to the helper.
 *
 * ```hbs
 * {{cos a}}
 * ```
 *
 * @param number The number to pass to `Math.cos`
 * @return The cos of the passed number
 */
export declare function cos([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=cos.d.ts.map