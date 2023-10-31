import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface Clz32Signature {
  Positional: Positional;
  Return: Return;
}

export default class Clz32Helper extends Helper<Clz32Signature> {}
