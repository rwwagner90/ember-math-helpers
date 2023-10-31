import { HelperLike } from '@glint/template';

type Positional = Array<number>;
type Return = number;

export interface DivSignature {
  Positional: Positional;
  Return: Return;
}

export type DivHelper = HelperLike<DivSignature>;
