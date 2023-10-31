import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface SignSignature {
  Positional: Positional;
  Return: Return;
}

export default class SignHelper extends Helper<SignSignature> {}
