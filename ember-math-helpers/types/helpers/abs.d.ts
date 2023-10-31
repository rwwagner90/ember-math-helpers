import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface AbsSignature {
  Positional: Positional;
  Return: Return;
}

export type AbsHelper = HelperLike<AbsSignature>;
