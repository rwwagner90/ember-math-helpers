export interface CeilSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.ceil` on the number passed to the helper.
 *
 * ```hbs
 * {{ceil a}}
 * ```
 *
 * @param number The number to pass to `Math.ceil`
 * @return The ceil of the passed number
 */
export declare function ceil([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=ceil.d.ts.map