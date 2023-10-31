import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface AcosSignature {
  Positional: Positional;
  Return: Return;
}

export default class AcosHelper extends Helper<AcosSignature> {}

