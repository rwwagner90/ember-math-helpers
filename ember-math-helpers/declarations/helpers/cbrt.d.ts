export interface CbrtSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.cbrt` on the number passed to the helper.
 *
 * ```hbs
 * {{cbrt a}}
 * ```
 *
 * @param number The number to pass to `Math.cbrt`
 * @return The cbrt of the passed number
 */
export declare function cbrt([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=cbrt.d.ts.map