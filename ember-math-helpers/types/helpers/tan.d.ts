import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface TanSignature {
  Positional: Positional;
  Return: Return;
}

export type TanHelper = HelperLike<TanSignature>;
