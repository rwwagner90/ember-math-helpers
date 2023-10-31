import Helper from '@ember/component/helper';

type Positional = Array<number>;
type Return = number;

export interface AddSignature {
  Positional: Positional;
  Return: Return;
}

export default class AddHelper extends Helper<AddSignature> {}

