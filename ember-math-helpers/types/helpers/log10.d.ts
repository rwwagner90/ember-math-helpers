import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface Log10PSignature {
  Positional: Positional;
  Return: Return;
}

export default class Log10PHelper extends Helper<Log10PSignature> {}
