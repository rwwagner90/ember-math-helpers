import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface AbsSignature {
  Positional: Positional;
  Return: Return;
}

export default class AbsHelper extends Helper<AbsSignature> {}
