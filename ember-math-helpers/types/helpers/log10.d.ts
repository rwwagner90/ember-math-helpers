import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface Log10Signature {
  Positional: Positional;
  Return: Return;
}

export type Log10Helper = HelperLike<Log10Signature>;
