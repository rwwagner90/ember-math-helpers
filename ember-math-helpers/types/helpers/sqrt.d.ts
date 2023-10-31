import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface SqrtSignature {
  Positional: Positional;
  Return: Return;
}

export default class SqrtHelper extends Helper<SqrtSignature> {}
