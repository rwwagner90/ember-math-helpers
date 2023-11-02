export interface Clz32Signature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.clz32` on the number passed to the helper.
 *
 * ```hbs
 * {{clz32 a}}
 * ```
 *
 * @param number The number to pass to `Math.clz32`
 * @return The clz32 of the passed number
 */
export declare function clz32([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=clz32.d.ts.map