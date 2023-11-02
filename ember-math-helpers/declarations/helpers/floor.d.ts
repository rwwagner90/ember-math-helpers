export interface FloorSignature {
    Args: {
        Positional: [number];
    };
    Return: number;
}
/**
 * Executes `Math.floor` on the number passed to the helper.
 *
 * ```hbs
 * {{floor a}}
 * ```
 *
 * @param {number} number The number to pass to `Math.floor`
 * @return {number} The floor of the passed number
 */
export declare function floor([number]: [number]): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: import("@ember/component/helper").EmptyObject;
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=floor.d.ts.map