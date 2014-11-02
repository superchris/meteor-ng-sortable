Package.describe({
  name: 'superchris:ng-sortable',
  summary: 'ng-sortable drag drop directive',
  version: '1.1.5',
  git: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('ng-sortable/dist/ng-sortable.js', "client");
  api.addFiles('ng-sortable/dist/ng-sortable.css', "client");
});
