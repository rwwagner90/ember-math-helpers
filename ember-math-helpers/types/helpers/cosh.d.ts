import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface CoshSignature {
  Positional: Positional;
  Return: Return;
}

export default class CoshHelper extends Helper<CoshSignature> {}
