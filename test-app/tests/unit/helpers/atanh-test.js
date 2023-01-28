import { atanh } from 'test-app/helpers/atanh';
import { module, test } from 'qunit';

module('Unit | Helper | atanh', function () {
  test('atanh works', function (assert) {
    const result = atanh([0]);
    assert.strictEqual(result, 0);
  });
});
