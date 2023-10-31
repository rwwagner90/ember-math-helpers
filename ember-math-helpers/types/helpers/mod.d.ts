import Helper from '@ember/component/helper';

type Positional = Array<number>;
type Return = number;

export interface ModSignature {
  Positional: Positional;
  Return: Return;
}

export default class ModHelper extends Helper<ModSignature> {}
