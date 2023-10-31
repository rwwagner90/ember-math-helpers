import { HelperLike } from '@glint/template';

type Positional = Array<number>;
type Return = number;

export interface AddSignature {
  Positional: Positional;
  Return: Return;
}

export type AddHelper = HelperLike<AddSignature>;
