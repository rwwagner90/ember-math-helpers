import Helper from '@ember/component/helper';

type Positional = [number];
type Return = number;

export interface FloorSignature {
  Positional: Positional;
  Return: Return;
}

export default class FloorHelper extends Helper<FloorSignature> {}
