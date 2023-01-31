import { cbrt } from 'ember-math-helpers/helpers/cbrt';
import { module, test } from 'qunit';

module('Unit | Helper | cbrt', function () {
  test('cbrt works', function (assert) {
    const result = cbrt([27]);
    assert.strictEqual(result, 3);
  });
});
