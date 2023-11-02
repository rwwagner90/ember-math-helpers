export interface TruncSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.trunc` on the number passed to the helper.
 *
 * ```hbs
 * {{trunc a}}
 * ```
 *
 * @param number The number to pass to `Math.trunc`
 * @return The trunc of the passed number
 */
export declare function trunc([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=trunc.d.ts.map