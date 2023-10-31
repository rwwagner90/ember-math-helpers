import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface SinSignature {
  Positional: Positional;
  Return: Return;
}

export type SinHelper = HelperLike<SinSignature>;
