export interface SinSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.sin` on the number passed to the helper.
 *
 * ```hbs
 * {{sin a}}
 * ```
 *
 * @param number The number to pass to `Math.sin`
 * @return The sin of the passed number
 */
export declare function sin([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=sin.d.ts.map