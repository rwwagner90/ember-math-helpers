export interface ImulSignature {
    Args: {
        Positional: [number, number];
    };
    Return: number;
}
/**
 * Executes `Math.imul` on the number passed to the helper.
 *
 * ```hbs
 * {{imul a}}
 * ```
 *
 * @param number1 The first number to pass to `Math.imul`
 * @param number2 The second number to pass to `Math.imul`
 * @return The imul of the passed numbers
 */
export declare function imul([number1, number2]: [number, number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number, number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=imul.d.ts.map