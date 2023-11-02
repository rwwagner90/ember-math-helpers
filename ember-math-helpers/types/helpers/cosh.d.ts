import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface CoshSignature {
  Positional: Positional;
  Return: Return;
}

export type CoshHelper = HelperLike<CoshSignature>;
