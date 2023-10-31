import { HelperLike } from '@glint/template';

type Positional = Array<number>;
type Return = number;

export interface PowSignature {
  Positional: Positional;
  Return: Return;
}

export type PowHelper = HelperLike<PowSignature>;
