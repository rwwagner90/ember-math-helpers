export interface AtanSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.atan` on the number passed to the helper.
 *
 * ```hbs
 * {{atan a}}
 * ```
 *
 * @param number The number to pass to `Math.atan`
 * @return The atan of the passed number
 */
export declare function atan([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=atan.d.ts.map