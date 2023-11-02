export interface LogESignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.log` on the number passed to the helper.
 *
 * ```hbs
 * {{log-e a}}
 * ```
 *
 * @param number The number to pass to `Math.log`
 * @return The log of the passed number
 */
export declare function logE([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=log-e.d.ts.map