import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface AcoshSignature {
  Positional: Positional;
  Return: Return;
}

export default class AcoshHelper extends Helper<AcoshSignature> {}

