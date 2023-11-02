export interface FroundSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.fround` on the number passed to the helper.
 *
 * ```hbs
 * {{fround a}}
 * ```
 *
 * @param number The number to pass to `Math.fround`
 * @return The fround of the passed number
 */
export declare function fround([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=fround.d.ts.map