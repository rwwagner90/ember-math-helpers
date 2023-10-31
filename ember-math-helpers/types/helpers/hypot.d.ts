import Helper from '@ember/component/helper';

type Positional = Array<number>;
type Return = number;

export interface HypotSignature {
  Positional: Positional;
  Return: Return;
}

export default class HypotHelper extends Helper<HypotSignature> {}
