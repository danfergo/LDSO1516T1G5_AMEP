angular.module('amep-errors', []).
config(function ($stateProvider) {
  $stateProvider.
  state('404', {
    parent: 'lt',
    url: '404',
    templateUrl: 'components/errors/404.html'
  }).
  state('401', {
    parent: 'lt',
    url: '401',
    templateUrl: 'components/errors/401.html'
  }).
  state('500', {
    parent: 'lt',
    url: '500',
    templateUrl: 'components/errors/500.html'
  });
});
