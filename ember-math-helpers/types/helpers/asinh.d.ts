import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface AsinhSignature {
  Positional: Positional;
  Return: Return;
}

export default class AsinhHelper extends Helper<AsinhSignature> {}


