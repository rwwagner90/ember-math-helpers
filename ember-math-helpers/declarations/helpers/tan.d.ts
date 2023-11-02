export interface TanSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.tan` on the number passed to the helper.
 *
 * ```hbs
 * {{tan a}}
 * ```
 *
 * @param number The number to pass to `Math.tan`
 * @return The tan of the passed number
 */
export declare function tan([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=tan.d.ts.map