import { HelperLike } from '@glint/template';

type Positional = Array<number>;
type Return = number;

export interface MaxSignature {
  Positional: Positional;
  Return: Return;
}

export type MaxHelper = HelperLike<MaxSignature>;
