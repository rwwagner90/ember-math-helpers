export interface AtanhSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.atanh` on the number passed to the helper.
 *
 * ```hbs
 * {{atanh a}}
 * ```
 *
 * @param number The number to pass to `Math.atanh`
 * @return The atanh of the passed number
 */
export declare function atanh([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=atanh.d.ts.map