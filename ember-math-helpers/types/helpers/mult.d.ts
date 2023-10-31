import Helper from '@ember/component/helper';

type Positional = Array<number>;
type Return = number;

export interface MultSignature {
  Positional: Positional;
  Return: Return;
}

export default class MultHelper extends Helper<MultSignature> {}
