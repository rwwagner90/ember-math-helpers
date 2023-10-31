import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface SqrtSignature {
  Positional: Positional;
  Return: Return;
}

export type SqrtHelper = HelperLike<SqrtSignature>;
