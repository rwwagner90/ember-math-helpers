import Helper from '@ember/component/helper';

type Positional = Array<number>;
type Return = number;

export interface SumSignature {
  Positional: Positional;
  Return: Return;
}

export default class SumHelper extends Helper<SumSignature> {}

