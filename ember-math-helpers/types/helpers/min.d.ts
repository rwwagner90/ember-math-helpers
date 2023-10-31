import { HelperLike } from '@glint/template';

type Positional = Array<number>;
type Return = number;

export interface MinSignature {
  Positional: Positional;
  Return: Return;
}

export type MinHelper = HelperLike<MinSignature>;
