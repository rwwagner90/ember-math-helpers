'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    autoImport: {
      watchDependencies: ['ember-math-helpers'],
    },
    'ember-cli-babel': { enableTypeScriptTransform: true },
    'ember-cli-addon-docs': {
      documentingAddonAt: '../ember-math-helpers',
    },
  });

  const { maybeEmbroider } = require('@embroider/test-setup');

  return maybeEmbroider(app);
};
