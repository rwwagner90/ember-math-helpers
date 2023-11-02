import { HelperLike } from '@glint/template';

type Positional = Array<number>;
type Return = number;

export interface MultSignature {
  Positional: Positional;
  Return: Return;
}

export type MultHelper = HelperLike<MultSignature>;
