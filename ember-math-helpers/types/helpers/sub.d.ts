import { HelperLike } from '@glint/template';

type Positional = Array<number>;
type Return = number;

export interface SubSignature {
  Args: {
    Positional: number[];
  }
  Return: number;
}

export type SubHelper = HelperLike<SubSignature>;
