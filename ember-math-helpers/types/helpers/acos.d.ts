import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface AcosSignature {
  Positional: Positional;
  Return: Return;
}

export type AcosHelper = HelperLike<AcosSignature>;
