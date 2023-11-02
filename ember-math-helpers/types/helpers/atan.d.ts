import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface AtanSignature {
  Positional: Positional;
  Return: Return;
}

export type AtanHelper = HelperLike<AtanSignature>;
