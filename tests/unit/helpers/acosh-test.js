import { acosh } from 'dummy/helpers/acosh';
import { module, test } from 'qunit';

module('Unit | Helper | acosh', function () {
  test('acosh works', function (assert) {
    const result = acosh([1]);
    assert.strictEqual(result, 0);
  });
});
