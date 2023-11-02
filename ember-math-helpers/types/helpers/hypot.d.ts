import { HelperLike } from '@glint/template';

type Positional = Array<number>;
type Return = number;

export interface HypotSignature {
  Positional: Positional;
  Return: Return;
}

export type HypotHelper = HelperLike<HypotSignature>;
