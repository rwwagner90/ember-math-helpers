import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface AcoshSignature {
  Positional: Positional;
  Return: Return;
}

export type AcoshHelper = HelperLike<AcoshSignature>;
