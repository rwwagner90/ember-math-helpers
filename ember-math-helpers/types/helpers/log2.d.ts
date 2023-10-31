import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface Log2Signature {
  Positional: Positional;
  Return: Return;
}

export default class Log2Helper extends Helper<Log2Signature> {}
