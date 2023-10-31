import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface Expm1Signature {
  Positional: Positional;
  Return: Return;
}

export default class Expm1Helper extends Helper<Expm1Signature> {}
