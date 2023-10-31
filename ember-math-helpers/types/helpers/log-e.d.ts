import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface LogESignature {
  Positional: Positional;
  Return: Return;
}

export default class LogEHelper extends Helper<LogESignature> {}
