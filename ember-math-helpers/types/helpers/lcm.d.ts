import Helper from '@ember/component/helper';

type Positional = [number1: number, number2: number];
type Return = number;

export interface LcmSignature {
  Positional: Positional;
  Return: Return;
}

export default class LcmHelper extends Helper<LcmSignature> {}
