import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface Log1PSignature {
  Positional: Positional;
  Return: Return;
}

export type Log1PHelper = HelperLike<Log1PSignature>;
