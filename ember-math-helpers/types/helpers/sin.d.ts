import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface SinSignature {
  Positional: Positional;
  Return: Return;
}

export default class SinHelper extends Helper<SinSignature> {}
