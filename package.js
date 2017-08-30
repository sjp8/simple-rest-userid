Package.describe({
  name: 'sjp8:simple-rest-userid',
  version: '1.0.0',

  // Brief, one-line summary of the package.
  summary: 'simple:rest with support for Meteor.userId() and Meteor.user() in methods endpoints.',

  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/sjp8/simple-rest-userid/blob/master/',

  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.use([
    'check',
    'ddp',
    'ddp-common',
    'ejson',
    'meteor',
    'mongo',
    'simple:json-routes@2.1.0',
    'underscore',
    'webapp',
  ], 'server');

  api.use([
    'accounts-base',
  ], 'server', {weak: true});

  api.addFiles([
    'http-connection.js',
    'http-subscription.js',
    'rest.js',
    'list-api.js',
  ], 'server');

  api.export('SimpleRest');
});

Package.onTest(function (api) {
  api.use([
    'check',
    'http',
    'ddp',
    'ddp-common',
    'jquery',
    'mongo',
    'random',
    'simple:json-routes',
    'sjp8:simple-rest-userid',
    'simple:rest-accounts-password',
    'simple:rest-json-error-handler',
    'test-helpers',
    'tinytest',
    'underscore',
  ]);

  api.addFiles('rest-tests.js');
});
