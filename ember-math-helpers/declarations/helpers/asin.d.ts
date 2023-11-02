export interface AsinSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.asin` on the number passed to the helper.
 *
 * ```hbs
 * {{asin a}}
 * ```
 *
 * @param number The number to pass to `Math.asin`
 * @return The asin of the passed number
 */
export declare function asin([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=asin.d.ts.map