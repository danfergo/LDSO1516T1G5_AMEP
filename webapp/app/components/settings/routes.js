angular.module('amep-settings', []).
config(function ($stateProvider, $urlRouterProvider) {

  //$urlRouterProvider.when('/', '/agenda');

  $stateProvider.
  state('settings', {
    parent: 'ls',
    url: 'settings',
    controller: 'settingsController',
    templateUrl: 'components/settings/settings.html',
    data: {
      permissions: {
        only: ['prossumer'],
        redirectTo: 'login'
      }
    }
  });
});
