export interface SignSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.sign` on the number passed to the helper.
 *
 * ```hbs
 * {{sign a}}
 * ```
 *
 * @param number The number to pass to `Math.sign`
 * @return The sign of the passed number
 */
export declare function sign([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=sign.d.ts.map