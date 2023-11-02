export interface TanhSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.tanh` on the number passed to the helper.
 *
 * ```hbs
 * {{tanh a}}
 * ```
 *
 * @param number The number to pass to `Math.tanh`
 * @return The tanh of the passed number
 */
export declare function tanh([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=tanh.d.ts.map