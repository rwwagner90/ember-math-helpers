'use strict';

const getChannelURL = require('ember-source-channel-url');
const { embroiderSafe, embroiderOptimized } = require('@embroider/test-setup');

module.exports = async function () {
  return {
    usePnpm: true,
    scenarios: [
      {
        name: 'ember-lts-4.4',
        npm: {
          devDependencies: {
            '@types/ember': '^4.0.11',
            '@types/ember-data': '^4.4.16',
            '@types/ember-data__adapter': '^4.0.6',
            '@types/ember-data__model': '^4.0.5',
            '@types/ember-data__serializer': '^4.0.6',
            '@types/ember-data__store': '^4.0.7',
            '@types/ember-resolver': '^9.0.2',
            '@types/ember__application': '^4.0.11',
            '@types/ember__array': '^4.0.10',
            '@types/ember__component': '^4.0.22',
            '@types/ember__controller': '^4.0.12',
            '@types/ember__debug': '^4.0.8',
            '@types/ember__destroyable': '^4.0.5',
            '@types/ember__engine': '^4.0.11',
            '@types/ember__error': '^4.0.6',
            '@types/ember__helper': '^4.0.8',
            '@types/ember__modifier': '^4.0.9',
            '@types/ember__object': '^4.0.12',
            '@types/ember__owner': '^4.0.9',
            '@types/ember__polyfills': '^4.0.6',
            '@types/ember__routing': '^4.0.22',
            '@types/ember__runloop': '^4.0.10',
            '@types/ember__service': '^4.0.9',
            '@types/ember__string': '^3.0.15',
            '@types/ember__template': '^4.0.7',
            '@types/ember__test': '^4.0.6',
            '@types/ember__test-helpers': '^2.9.3',
            '@types/ember__utils': '^4.0.7',
            'ember-source': '~4.4.0',
          },
        },
      },
      {
        name: 'ember-lts-4.8',
        npm: {
          devDependencies: {
            '@types/ember': '^4.0.11',
            '@types/ember-data': '^4.4.16',
            '@types/ember-data__adapter': '^4.0.6',
            '@types/ember-data__model': '^4.0.5',
            '@types/ember-data__serializer': '^4.0.6',
            '@types/ember-data__store': '^4.0.7',
            '@types/ember-resolver': '^9.0.2',
            '@types/ember__application': '^4.0.11',
            '@types/ember__array': '^4.0.10',
            '@types/ember__component': '^4.0.22',
            '@types/ember__controller': '^4.0.12',
            '@types/ember__debug': '^4.0.8',
            '@types/ember__destroyable': '^4.0.5',
            '@types/ember__engine': '^4.0.11',
            '@types/ember__error': '^4.0.6',
            '@types/ember__helper': '^4.0.8',
            '@types/ember__modifier': '^4.0.9',
            '@types/ember__object': '^4.0.12',
            '@types/ember__owner': '^4.0.9',
            '@types/ember__polyfills': '^4.0.6',
            '@types/ember__routing': '^4.0.22',
            '@types/ember__runloop': '^4.0.10',
            '@types/ember__service': '^4.0.9',
            '@types/ember__string': '^3.0.15',
            '@types/ember__template': '^4.0.7',
            '@types/ember__test': '^4.0.6',
            '@types/ember__test-helpers': '^2.9.3',
            '@types/ember__utils': '^4.0.7',
            'ember-source': '~4.8.0',
          },
        },
      },
      {
        name: 'ember-lts-4.12',
        npm: {
          devDependencies: {
            '@types/ember': '^4.0.11',
            '@types/ember-data': '^4.4.16',
            '@types/ember-data__adapter': '^4.0.6',
            '@types/ember-data__model': '^4.0.5',
            '@types/ember-data__serializer': '^4.0.6',
            '@types/ember-data__store': '^4.0.7',
            '@types/ember-resolver': '^9.0.2',
            '@types/ember__application': '^4.0.11',
            '@types/ember__array': '^4.0.10',
            '@types/ember__component': '^4.0.22',
            '@types/ember__controller': '^4.0.12',
            '@types/ember__debug': '^4.0.8',
            '@types/ember__destroyable': '^4.0.5',
            '@types/ember__engine': '^4.0.11',
            '@types/ember__error': '^4.0.6',
            '@types/ember__helper': '^4.0.8',
            '@types/ember__modifier': '^4.0.9',
            '@types/ember__object': '^4.0.12',
            '@types/ember__owner': '^4.0.9',
            '@types/ember__polyfills': '^4.0.6',
            '@types/ember__routing': '^4.0.22',
            '@types/ember__runloop': '^4.0.10',
            '@types/ember__service': '^4.0.9',
            '@types/ember__string': '^3.0.15',
            '@types/ember__template': '^4.0.7',
            '@types/ember__test': '^4.0.6',
            '@types/ember__test-helpers': '^2.9.3',
            '@types/ember__utils': '^4.0.7',
            'ember-source': '~4.12.0',
          },
        },
      },
      {
        name: 'ember-lts-5.4',
        npm: {
          devDependencies: {
            'ember-source': '~5.4.0',
          },
        },
      },
      {
        name: 'ember-release',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('release'),
          },
        },
      },
      {
        name: 'ember-beta',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('beta'),
          },
        },
      },
      {
        name: 'ember-canary',
        npm: {
          devDependencies: {
            'ember-source': await getChannelURL('canary'),
          },
        },
      },
      embroiderSafe(),
      embroiderOptimized(),
    ],
  };
};
