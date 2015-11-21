angular.module('amep-layouts', ['amep-toolbar', 'amep-sidebar']).
config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.
  state('ls', {
    url: '/',
    abstract: true,
    templateUrl: 'shared/layouts/sidebar.html',
    controller: function ($scope, currentSession) {
      $scope.currentSession = currentSession;
    },
    resolve: {
      currentSession: ['Session', function (Session) {
        return Session.get().$promise;
      }]
    }
    /*data: {
     permissions: {
     only: ['prossumer'],
     redirectTo: 'login'
     }
     }*/
  }).
  state('lt', {
    url: '/',
    abstract: true,
    templateUrl: 'shared/layouts/toolbar.html',
    controller: function ($scope, currentSession) {
      $scope.currentSession = currentSession;
    },
    resolve: {
      currentSession: ['Session', function (Session) {
        return Session.get().$promise;
      }]
    }
    /*data: {
     permissions: {
     only: ['prossumer'],
     redirectTo: 'login'
     }
     }*/
  }).
  state('loo', {
    url: '/',
    abstract: true,
    templateUrl: 'shared/layouts/one-only.html',
    controller: function ($scope, currentSession) {
      $scope.currentSession = currentSession;
    },
    resolve: {
      currentSession: ['Session', function (Session) {
        return Session.get().$promise;
      }]
    }
    /*data: {
     permissions: {
     only: ['prossumer'],
     redirectTo: 'login'
     }
     }*/
  });
});
