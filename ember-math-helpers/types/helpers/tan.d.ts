import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface TanSignature {
  Positional: Positional;
  Return: Return;
}

export default class TanHelper extends Helper<TanSignature> {}
