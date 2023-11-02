import { HelperLike } from '@glint/template';

type Positional = Array<number>;
type Return = number;

export interface ModSignature {
  Positional: Positional;
  Return: Return;
}

export type ModHelper = HelperLike<ModSignature>;
