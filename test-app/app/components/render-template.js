import Component from '@glimmer/component';
import { compileHBS } from 'ember-repl/formats/hbs';
import * as helpers from 'ember-math-helpers';
import { cached } from '@glimmer/tracking';
import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';

export default class RenderTemplate extends Component {
  @cached
  get compileResult() {
    if (macroCondition(dependencySatisfies('ember-source', '>= 5.0.0'))) {
      return compileHBS(this.args.templateString, {
        scope: { ...helpers },
      });
    }

    return false;
  }
}
