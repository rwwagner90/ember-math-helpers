import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface ExpSignature {
  Positional: Positional;
  Return: Return;
}

export type ExpHelper = HelperLike<ExpSignature>;
