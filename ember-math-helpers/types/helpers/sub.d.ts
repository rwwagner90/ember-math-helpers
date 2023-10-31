import Helper from '@ember/component/helper';

type Positional = Array<number>;
type Return = number;

export interface SubSignature {
  Positional: Positional;
  Return: Return;
}

export default class SubHelper extends Helper<SubSignature> {}

