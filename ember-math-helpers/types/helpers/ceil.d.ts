import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface CeilSignature {
  Positional: Positional;
  Return: Return;
}

export default class CeilHelper extends Helper<CeilSignature> {}
