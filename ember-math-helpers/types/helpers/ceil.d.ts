import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface CeilSignature {
  Positional: Positional;
  Return: Return;
}

export type CeilHelper = HelperLike<CeilSignature>;
