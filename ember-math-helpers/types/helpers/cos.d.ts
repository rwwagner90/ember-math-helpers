import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface CosSignature {
  Positional: Positional;
  Return: Return;
}

export default class CosHelper extends Helper<CosSignature> {}
