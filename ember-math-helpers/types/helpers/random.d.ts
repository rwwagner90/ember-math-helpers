import Helper from '@ember/component/helper';

type Positional = [upperBound: number, lowerBound: number];
interface Named {
  decimals?: number;
}
type Return = number;

export interface RandomSignature {
  Positional: Positional;
  Named: Named;
  Return: Return;
}

export default class RandomHelper extends Helper<RandomSignature> {}
