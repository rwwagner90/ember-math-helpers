## Configuration
If you don't need all the helpers, you can specify which to whitelist or blacklist using `only` or `except` within your `ember-cli-build.js`:

```js
module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-math-helpers': {
      only: ['add', 'sub'],
      except: ['random', 'tan']
    }
  });
```

Both `only` and `except` can be safely used together (the addon computes the diff), although it's best if you only use one for your own sanity.

```js
except: ['random'] // imports all helpers except `random`
only: ['random'] // imports only `random`
```

### Glint

`ember-math-helpers` supplies a template registry for use with Glint:

```js
import '@glint/environment-ember-loose';

import type EmberMathHelpersRegistry from 'ember-math-helpers/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry extends EmberMathHelpersRegistry, /* other addon registries */ {
    // local entries
  }
}
```

### Template Imports

For convenience, helpers can be imported directly from the index:

```gjs
import { sum } from 'ember-math-helpers';

<template>
  {{sum 1 2}}
</template>
```
