import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface CbrtSignature {
  Positional: Positional;
  Return: Return;
}

export default class CbrtHelper extends Helper<CbrtSignature> {}
