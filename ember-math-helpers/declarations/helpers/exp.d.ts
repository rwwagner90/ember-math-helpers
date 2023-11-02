export interface ExpSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.exp` on the number passed to the helper.
 *
 * ```hbs
 * {{exp a}}
 * ```
 *
 * @param number The number to pass to `Math.exp`
 * @return The exp of the passed number
 */
export declare function exp([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=exp.d.ts.map