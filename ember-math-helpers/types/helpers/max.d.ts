import Helper from '@ember/component/helper';

type Positional = Array<number>;
type Return = number;

export interface MaxSignature {
  Positional: Positional;
  Return: Return;
}

export default class MaxHelper extends Helper<MaxSignature> {}
