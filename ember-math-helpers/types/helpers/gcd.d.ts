import { HelperLike } from '@glint/template';

type Positional = [number1: number, number2: number];
type Return = number;

export interface GcdSignature {
  Positional: Positional;
  Return: Return;
}

export type GcdHelper = HelperLike<GcdSignature>;
