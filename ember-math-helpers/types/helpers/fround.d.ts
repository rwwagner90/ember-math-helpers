import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface FroundSignature {
  Positional: Positional;
  Return: Return;
}

export default class FroundHelper extends Helper<FroundSignature> {}
