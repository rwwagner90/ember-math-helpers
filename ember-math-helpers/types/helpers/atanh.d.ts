import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface AtanhSignature {
  Positional: Positional;
  Return: Return;
}

export type AtanhHelper = HelperLike<AtanhSignature>;
