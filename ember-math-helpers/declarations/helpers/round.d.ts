export interface RoundSignature {
    Args: {
        Named: {
            decimals?: number;
            exp?: number;
        };
        Positional: [number];
    };
    Return: number;
}
export declare function round([number]: [number], namedArgs: RoundSignature['Args']['Named']): number;
declare const _default: import("@ember/component/helper").FunctionBasedHelper<{
    Args: {
        Positional: [number];
        Named: {
            decimals?: number | undefined;
            exp?: number | undefined;
        };
    };
    Return: number;
}>;
export default _default;
//# sourceMappingURL=round.d.ts.map