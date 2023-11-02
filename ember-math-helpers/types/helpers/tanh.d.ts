import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface TanhSignature {
  Positional: Positional;
  Return: Return;
}

export type TanhHelper = HelperLike<TanhSignature>;
