import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface SignSignature {
  Positional: Positional;
  Return: Return;
}

export type SignHelper = HelperLike<SignSignature>;
