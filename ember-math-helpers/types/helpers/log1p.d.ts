import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface Log1PSignature {
  Positional: Positional;
  Return: Return;
}

export default class Log1PHelper extends Helper<Log1PSignature> {}
