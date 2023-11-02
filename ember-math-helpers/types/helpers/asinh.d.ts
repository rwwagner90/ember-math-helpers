import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface AsinhSignature {
  Positional: Positional;
  Return: Return;
}

export type AsinhHelper = HelperLike<AsinhSignature>;
