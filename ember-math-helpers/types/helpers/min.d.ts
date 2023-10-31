import Helper from '@ember/component/helper';

type Positional = Array<number>;
type Return = number;

export interface MinSignature {
  Positional: Positional;
  Return: Return;
}

export default class MinHelper extends Helper<MinSignature> {}
