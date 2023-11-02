export interface RandomSignature {
    Args: {
        Named: {
            decimals?: number;
        };
        Positional: [upperBound?: number, lowerBound?: number];
    };
    Return: number;
}
/**
 * Executes `Math.random` with the provided upper-bounded randoms, lower- and upper-bounded randoms,
 * and the option to configure decimal precision.
 *
 * ```hbs
 * {{random}} or {{random decimals=4}}
 * ```
 *
 * ```hbs
 * {{random 42}} or {{random 42 decimals=4}}
 * ```
 *
 * ```hbs
 * {{random 21 1797}} or {{random 21 1797 decimals=4}}
 * ```
 *
 * @param upperBound
 * @param lowerBound
 * @param {object} { decimals } decimal precision value
 * @return The random generated number
 */
export declare function random([upperBound, lowerBound]: RandomSignature['Args']['Positional'], { decimals }: RandomSignature['Args']['Named']): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [upperBound?: number | undefined, lowerBound?: number | undefined];
        Named: {
            decimals?: number | undefined;
        };
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=random.d.ts.map