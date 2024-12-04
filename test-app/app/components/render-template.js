import Component from '@glimmer/component';
import * as helpers from 'ember-math-helpers';
import { cached } from '@glimmer/tracking';
import {
  importSync,
  macroCondition,
  dependencySatisfies,
} from '@embroider/macros';

export default class RenderTemplate extends Component {
  @cached
  get compileResult() {
    if (macroCondition(dependencySatisfies('ember-source', '>= 5.0.0'))) {
      const { compileHBS } = importSync('ember-repl/formats/hbs');
      return compileHBS(this.args.templateString, {
        scope: { ...helpers },
      });
    }

    return false;
  }
}
