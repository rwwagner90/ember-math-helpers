import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface ExpSignature {
  Positional: Positional;
  Return: Return;
}

export default class ExpHelper extends Helper<ExpSignature> {}
