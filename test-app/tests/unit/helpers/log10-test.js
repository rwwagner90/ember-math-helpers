import { log10 } from 'ember-math-helpers/helpers/log10';
import { module, test } from 'qunit';

module('Unit | Helper | log10', function () {
  test('log10 works', function (assert) {
    const result = log10([2]);
    assert.strictEqual(Number(result.toFixed(3)), 0.301);
  });
});
