export interface AcoshSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.acosh` on the number passed to the helper.
 *
 * ```hbs
 * {{acosh a}}
 * ```
 *
 * @param number The number to pass to `Math.acosh`
 * @return The acosh of the passed number
 */
export declare function acosh([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=acosh.d.ts.map