import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface AsinSignature {
  Positional: Positional;
  Return: Return;
}

export type AsinHelper = HelperLike<AsinSignature>;
