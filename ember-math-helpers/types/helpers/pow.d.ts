import Helper from '@ember/component/helper';

type Positional = Array<number>;
type Return = number;

export interface PowSignature {
  Positional: Positional;
  Return: Return;
}

export default class PowHelper extends Helper<PowSignature> {}
