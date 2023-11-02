import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface Log2Signature {
  Positional: Positional;
  Return: Return;
}

export type Log2Helper = HelperLike<Log2Signature>;
