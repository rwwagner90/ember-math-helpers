export interface SqrtSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.sqrt` on the number passed to the helper.
 *
 * ```hbs
 * {{sqrt a}}
 * ```
 *
 * @param number The number to pass to `Math.sqrt`
 * @return The sqrt of the passed number
 */
export declare function sqrt([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=sqrt.d.ts.map