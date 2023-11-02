import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface CbrtSignature {
  Positional: Positional;
  Return: Return;
}

export type CbrtHelper = HelperLike<CbrtSignature>;
