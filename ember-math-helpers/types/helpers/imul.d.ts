import Helper from '@ember/component/helper';

type Positional = [number1: number, number2: number];
type Return = number;

export interface ImulSignature {
  Positional: Positional;
  Return: Return;
}

export default class ImulHelper extends Helper<ImulSignature> {}
