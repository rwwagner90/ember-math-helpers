import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface TanhSignature {
  Positional: Positional;
  Return: Return;
}

export default class TanhHelper extends Helper<TanhSignature> {}
