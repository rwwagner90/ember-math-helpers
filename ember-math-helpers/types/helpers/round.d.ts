import Helper from '@ember/component/helper';

type Positional = [number];
interface Named {
  decimals?: number;
  exp?: number;
}
type Return = number;

export interface RoundSignature {
  Positional: Positional;
  Named: Named;
  Return: Return;
}

export default class RoundHelper extends Helper<RoundSignature> {}
