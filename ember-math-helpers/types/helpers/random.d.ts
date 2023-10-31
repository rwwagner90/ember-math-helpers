import { HelperLike } from '@glint/template';

type Positional = [upperBound: number, lowerBound: number];
interface Named {
  decimals?: number;
}
type Return = number;

export interface RandomSignature {
  Positional: Positional;
  Named: Named;
  Return: Return;
}

export type RandomHelper = HelperLike<RandomSignature>;
