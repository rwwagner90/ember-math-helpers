import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface TruncSignature {
  Positional: Positional;
  Return: Return;
}

export default class TruncHelper extends Helper<TruncSignature> {}
