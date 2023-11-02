export interface Atan2Signature {
    Args: {
        Positional: [number, number];
    };
    Return: number;
}
/**
 * Executes `Math.atan2` on the numbers passed to the helper.
 *
 * ```hbs
 * {{atan2 a b}}
 * ```
 *
 * @param number1 The first number to pass to `Math.atan2`
 * @param number2 The second number to pass to `Math.atan2`
 * @return The atan2 of the passed numbers
 */
export declare function atan2([number1, number2]: [number, number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number, number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=atan2.d.ts.map