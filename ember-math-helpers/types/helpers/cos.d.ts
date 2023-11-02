import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface CosSignature {
  Positional: Positional;
  Return: Return;
}

export type CosHelper = HelperLike<CosSignature>;
