import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface TruncSignature {
  Positional: Positional;
  Return: Return;
}

export type TruncHelper = HelperLike<TruncSignature>;
