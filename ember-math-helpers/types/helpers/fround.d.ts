import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface FroundSignature {
  Positional: Positional;
  Return: Return;
}

export type FroundHelper = HelperLike<FroundSignature>;
