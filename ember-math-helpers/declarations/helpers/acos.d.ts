export interface AcosSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.acos` on the number passed to the helper.
 *
 * ```hbs
 * {{acos a}}
 * ```
 *
 * @param number The number to pass to `Math.acos`
 * @return The acos of the passed number
 */
export declare function acos([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=acos.d.ts.map