import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface AtanSignature {
  Positional: Positional;
  Return: Return;
}

export default class AtanHelper extends Helper<AtanSignature> {}
