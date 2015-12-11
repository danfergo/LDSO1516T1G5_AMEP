angular.module('amep-history', ['amep-model']).
config(function ($stateProvider) {
  $stateProvider.
  state('history', {
    parent: 'ls',
    url: 'history',
    controller: 'historyController',
    templateUrl: 'components/history/history.html'
  });
});
