import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface Expm1Signature {
  Positional: Positional;
  Return: Return;
}

export type Expm1Helper = HelperLike<Expm1Signature>;
