export interface CoshSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.cosh` on the number passed to the helper.
 *
 * ```hbs
 * {{cosh a}}
 * ```
 *
 * @param number The number to pass to `Math.cosh`
 * @return The cosh of the passed number
 */
export declare function cosh([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=cosh.d.ts.map