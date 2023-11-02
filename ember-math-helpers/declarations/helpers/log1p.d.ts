export interface Log1pSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.log1p` on the number passed to the helper.
 *
 * ```hbs
 * {{log1p a}}
 * ```
 *
 * @param number The number to pass to `Math.log1p`
 * @return The log1p of the passed number
 */
export declare function log1p([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=log1p.d.ts.map