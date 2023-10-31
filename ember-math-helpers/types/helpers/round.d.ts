import { HelperLike } from '@glint/template';

type Positional = [number];
interface Named {
  decimals?: number;
  exp?: number;
}
type Return = number;

export interface RoundSignature {
  Positional: Positional;
  Named: Named;
  Return: Return;
}

export type RoundHelper = HelperLike<RoundSignature>;
