import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface FloorSignature {
  Positional: Positional;
  Return: Return;
}

export type FloorHelper = HelperLike<FloorSignature>;
