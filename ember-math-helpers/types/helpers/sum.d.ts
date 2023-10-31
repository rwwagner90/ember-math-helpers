import { HelperLike } from '@glint/template';

type Positional = Array<number>;
type Return = number;

export interface SumSignature {
  Positional: Positional;
  Return: Return;
}

export type SumHelper = HelperLike<SumSignature>;

