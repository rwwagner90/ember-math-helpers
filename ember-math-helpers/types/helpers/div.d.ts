import Helper from '@ember/component/helper';

type Positional = Array<number>;
type Return = number;

export interface DivSignature {
  Positional: Positional;
  Return: Return;
}

export default class DivHelper extends Helper<DivSignature> {}

