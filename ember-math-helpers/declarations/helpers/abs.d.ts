export interface AbsSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Uses `Math.abs` to take the absolute value of the number passed to the helper.
 *
 * ```hbs
 * {{abs a}}
 * ```
 *
 * @param number The number to take the absolute value of
 * @return The absolute value of the passed number
 */
export declare function abs([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=abs.d.ts.map