import { HelperLike } from '@glint/template';

type Positional = [number];
type Return = number;

export interface LogESignature {
  Positional: Positional;
  Return: Return;
}

export type LogEHelper = HelperLike<LogESignature>;
