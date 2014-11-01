Package.describe({
  name: 'superchris:ng-sortable',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('superchris:ng-sortable.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('superchris:ng-sortable');
  api.addFiles('superchris:ng-sortable-tests.js');
});
