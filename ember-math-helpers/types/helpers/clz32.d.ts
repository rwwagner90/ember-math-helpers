import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface Clz32Signature {
  Positional: Positional;
  Return: Return;
}

export type Clz32Helper = HelperLike<Clz32Signature>;
