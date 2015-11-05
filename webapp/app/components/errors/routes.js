angular.module('amep-errors', []).
config(function ($stateProvider) {
  $stateProvider.
    state('404', {
      url: '/404',
      templateUrl: 'components/errors/404View.html'
    });
});
