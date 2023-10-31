import { HelperLike } from '@glint/template';

type Positional = [number1: number, number2: number];
type Return = number;

export interface Atan2Signature {
  Positional: Positional;
  Return: Return;
}

export type Atan2Helper = HelperLike<Atan2Signature>;
