import { acos } from 'test-app/helpers/acos';
import { module, test } from 'qunit';

module('Unit | Helper | acos', function () {
  test('acos works', function (assert) {
    const result = acos([1]);
    assert.strictEqual(result, 0);
  });
});
